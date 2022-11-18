# microservices-app
Small app with microservice architecture deployed in a Kubernetes cluster, Skaffold dev environment. There is a basic placeholder frontend built in React to allow you to interact with the backend.
The emphasis for this project is on the backend architecture as well as the infrastructure/dev environment setup with Kubernetes and Skaffold allowing for fast and easy build & deployment.

## Quick start
This assumes you have Docker, Kubernetes and Skaffold already installed => Clone the repository, then:
```
cd microservices-app/ && skaffold dev
```

The app has a placeholder frontend built in React that can be accessed at [http://posts.com](http://posts.com). This serves as a way for the user to interact with the backend and is not meant to be a fully fleshed out frontend.

From here any changes made will be hot reloaded.
