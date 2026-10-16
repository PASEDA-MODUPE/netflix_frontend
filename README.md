# Netflix-Style Movie Application — AWS Deployment

## Project Overview

This project demonstrates the deployment of a Netflix-style movie application using AWS, Docker, GitHub Actions, and MongoDB Atlas.

The project includes a React frontend and a Java Spring Boot backend, with movie data stored in MongoDB Atlas.

## Technologies Used

- AWS EC2 — application hosting
- Amazon ECR — Docker image registry
- Docker — containerization
- GitHub Actions — CI/CD automation
- React — frontend
- Java 17 and Spring Boot — backend API
- MongoDB Atlas — database
- Git and GitHub — source control

## Architecture

- The React frontend runs in a Docker container on port 3000.
- The Spring Boot backend runs in a Docker container, with EC2 port 80 mapped to container port 8080.
- The backend connects to MongoDB Atlas.
- GitHub Actions builds Docker images and pushes them to Amazon ECR.

## Deployment Highlights

- Built and published Docker images through GitHub Actions.
- Deployed the backend and frontend on an Ubuntu EC2 instance.
- Configured the backend to connect to MongoDB Atlas using an environment variable.
- Updated the frontend API base URL to point to the deployed backend.
- Successfully launched the updated frontend container.

## Challenges and Solutions

### 1. GitHub Actions configuration

An earlier workflow failed because the AWS region was missing from the AWS credentials configuration. The workflow configuration was corrected, and a subsequent run succeeded.

### 2. Incorrect frontend API URL

The frontend initially referenced an outdated backend IP address. I updated the Axios configuration, committed the change, and rebuilt the frontend image.

### 3. AWS IAM permission error

The EC2 role could pull ECR images but could not list image tags using `ecr:DescribeImages`. I checked the GitHub Actions logs to identify the correct image tag instead of changing permissions unnecessarily.

### 4. EC2 disk space

Docker failed to pull the updated frontend image because the root disk was nearly full. I checked disk usage, attempted to clear the build cache, and removed unused Docker images. Available space increased from approximately 216 MB to 1.7 GB, and the new image was pulled successfully.

### 5. Frontend update

I replaced the old frontend container with the updated image while leaving the backend running. I then verified that the application loaded in the browser.

## Key Lessons Learned

- Troubleshoot errors using logs and command output.
- Verify Docker image tags before deployment.
- Manage disk space on cloud instances.
- Use IAM roles and least-privilege permissions.
- Keep database credentials and secrets out of source control.
- Update only the component that needs changing.

## Future Improvements

- Configure HTTPS and a domain name.
- Tighten security group and MongoDB network access rules.
- Improve monitoring and deployment rollback procedures.
- Explore a more scalable AWS architecture.

## Repositories

- Frontend: https://github.com/PASEDA-MODUPE/netflix_frontend
- Backend: https://github.com/PASEDA-MODUPE/netflix_backend
