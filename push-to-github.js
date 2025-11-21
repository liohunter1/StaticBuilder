import { Octokit } from '@octokit/rest';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found');
  }

  const connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function pushToGitHub() {
  try {
    console.log('Getting GitHub access token...');
    const accessToken = await getAccessToken();
    
    console.log('Authenticating with GitHub...');
    const octokit = new Octokit({ auth: accessToken });
    
    console.log('Fetching GitHub user info...');
    const { data: user } = await octokit.rest.users.getAuthenticated();
    const owner = user.login;
    
    console.log(`Creating repository for user: ${owner}`);
    const repoName = 'esteel-construction';
    
    try {
      // Try to get existing repo
      await octokit.rest.repos.get({ owner, repo: repoName });
      console.log(`Repository ${repoName} already exists!`);
    } catch (error) {
      if (error.status === 404) {
        // Create new repo
        const { data: repo } = await octokit.rest.repos.createForAuthenticatedUser({
          name: repoName,
          description: 'Esteel Construction Ltd - Corporate Website',
          private: false,
          auto_init: false
        });
        console.log(`✓ Created repository: ${repo.html_url}`);
      } else {
        throw error;
      }
    }
    
    const repoUrl = `https://github.com/${owner}/${repoName}.git`;
    console.log(`\nRepository URL: ${repoUrl}`);
    console.log('\nPushing code to GitHub...');
    
    // Configure git
    await execAsync('git config user.email "noreply@esteel.co.ke"');
    await execAsync('git config user.name "Esteel Construction"');
    
    // Check if remote exists, if not add it
    try {
      await execAsync('git remote get-url origin');
    } catch {
      await execAsync(`git remote add origin ${repoUrl}`);
    }
    
    // Push to GitHub
    await execAsync(`git push -u origin main`, { cwd: '/home/runner/workspace' });
    
    console.log('\n✓ Successfully pushed to GitHub!');
    console.log(`Repository: ${repoUrl}`);
    console.log(`\nYour website code is now on GitHub and ready to share!`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

pushToGitHub();
