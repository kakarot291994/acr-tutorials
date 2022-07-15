# acr-tutorials

# Steps to Push Containers to Azure Acr Repository

- Fork This reposiroty inside your local PC
- Install Docker inside your PC
- # Use The command docker build --platform=linux/amd64 -t imagename:v2 to build the container
- # Once Image is build use docker image ls to list the images
- # docker run -dit -p 8080:8080 imagename:v1 to test container locally
- # Create Azure ACR in azure console , and make sure to switch on admin user
- # docker login to login to ACR Repository
- # docker tag imagename:v1 reponame.azureacr.io/imagename:v1: - To Create an alias name for docker image
- # docker push eponame.azureacr.io/imagename:v1: - To Push Image to acr

