# 

# hello-kubes: Kubernetes' simple example using local Docker image

To build an image:
```
$ docker build -t hello-kubes .
```

To verify the Docker image. Run command:
```
$ docker run -p 8080:8080 -i -t hello-kubes:latest 
```
and test it with:
```
$ curl -v localhost:8080
which should return 'hello kubernetes!'
```

We can stop the docker and now use kubernetes to utilize our local image.

create the POD using pod.yaml
```
$ kubectl create -f pod.yaml
```
verify the pod created with:
```
$ kubectl get pods
```
To see its properties and values
```
$ kubectl describe pod hello-kubes
```

To run the POD which has the container image:
```
$ kubectl exec hello-kubes -i -t -- sh
```
Verify that the node server is running, using our container in POD:
```
$ curl http://localhost:8080
which should return 'hello kubernetes!'
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
create a service using service yml 
```
$ kubectl apply -f service.yml
```
or by command with out using service.yml
```
$ kubectl expose deployment hellokubes-deployment --type=LoadBalancer --name=myservice
```
