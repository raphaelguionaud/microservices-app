# microservices-app
Small app with microservice architecture deployed in a Kubernetes cluster, Skaffold dev environment. There is a basic placeholder frontend built in React to allow you to interact with the backend.
The emphasis for this project is on the backend architecture as well as the infrastructure/dev environment setup with Kubernetes and Skaffold allowing for fast and easy build & deployment.

## Quick start
This assumes you have Docker, Kubernetes and Skaffold already installed.

1. open /etc/hosts/ and add the line:
```
127.0.0.1 posts.com
```
NOTE: This may require you to use administrator privileges. Your hosts file should then look something like this:

<img width="696" alt="Screenshot 2022-11-18 at 15 41 59" src="https://user-images.githubusercontent.com/95441674/202743838-32ce6288-b24f-4fe9-b1ab-c66101317089.png">

2. Clone the repository
```
cd microservices-app/ && skaffold dev
```

The app has a placeholder frontend built in React that can be accessed at [http://posts.com](http://posts.com). This is not a real url, just rerouting to the NGINX Ingress service which is exposing itself at 127.0.0.1. This serves as a way for the user to interact with the backend and is not meant to be a fully fleshed out frontend.

From here any changes made will be hot reloaded.
