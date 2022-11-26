# microservices-app
Small app with NodeJS microservices and a basic placeholder frontend built in React to allow you to interact with the backend.
The emphasis for this project is on the backend architecture which is event-driven, as well as the infrastructure/dev environment setup with Kubernetes and Skaffold allowing for fast and easy development & deployment.

Tools used:
* NodeJS
* Express
* React
* Axios
* Nodemon
* NGINX Ingress
* Docker
* Kubernetes
* Skaffold

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
git clone git@github.com:raphaelguionaud/microservices-app.git
```

3. Run the app using Skaffold (make sure Docker daemon is running first)
```
cd microservices-app/ && skaffold dev
```

The app has a placeholder frontend built in React that can be accessed at [http://posts.com](http://posts.com). This is not a real url, just rerouting to the NGINX Ingress controller. The frontend serves as a way for the user to interact with the backend and is not meant to be production-ready.

From here any changes made will be hot reloaded.

## Files overview
```
└── microservices-app
    ├── client <--dummy react frontend
    ├── comments <-- handles comment creation
    ├── event-bus <-- handles passing events to all services
    ├── infra <-- k8s config files
    ├── moderation <-- handles comment moderation
    ├── posts <-- handles post creation
    ├── query <-- handles GET requests for posts/comments
    └── skaffold.yaml <-- skaffold config
```
Each service has a Dockerfile located in its root directory, and a k8s deployment config file in infra/k8s/, including the client.

## Architecture
![Capture](https://user-images.githubusercontent.com/95441674/204098891-7d633555-aec8-4c80-9eab-902c8e7750ae.PNG)
