# hello-kubes

# Kubernetes example using simple node.js local docker image

To build an image:
```
$ docker build -t hello-kubes .
```

To verify the Docker image. Run command:
```
$ docker run -p 8080:8080 -i -t hello-kubes:latest 
```

you can test it with:
```
$ curl -v localhost:8080
```

We can stop the docker and now use kubernetes to utilize the local image.

create the POD using pod.yaml
```
$ kubectl create -f pod.yaml
```
verify the pod created with:
```
$ kubectl get pods
```
describe the pod and check its properties and values
```
$ kubectl describe pod hello-kubes
```

To run the POD which has the container image:
```
$ kubectl exec hello-kubes -i -t -- sh
```
Check the node server running using the container image in POD:
```
$ curl http://localhost:8080
```

Deploy using Deployment.yaml
```
$ kubectl apply -f Deployment.yaml 
```
Verify the deployment:
```
$ kubectl get deployments
$ kubectl describe deployments
```
We can play with it by updating the deployment or updating PODs etc.
