# Node Concepts

This project is a demonstration of some Node.js concepts, like concurrency and blocking operations, within
a [NestJS](https://nestjs.com/) application.
Additionally, it utilizes Kubernetes for container orchestration and includes an example of autoscaling based on CPU
metrics.

## Project Source

The structure and concepts of this project were inspired by the YouTube video
titled [Three Concepts Every Node.js Developer Should Understand](https://www.youtube.com/watch?v=_cNIsBTg8HA).

## Setup

### Minikube Setup

1. Start Minikube:
    ```bash
    minikube start
    ```

2. Enable Metrics Server:
    ```bash
    minikube addons enable metrics-server
    ```

### Tilt Setup (Optional)

Install [Tilt](https://docs.tilt.dev/install.html) for a more interactive development experience.

```bash
tilt up
```

### Without Tilt

Build the Docker image and deploy the application to Minikube:

```bash
minikube image build -t node-concepts .
minikube kubectl -- apply -f kubernetes.yaml
minikube kubectl -- port-forward service/node-concepts 3000:8000
```

### Execute Stress Tests

Run simple stress tests using [autocannon](https://github.com/mcollina/autocannon):

```bash
npm run autocannon -- localhost:3000/blocking -c 1000 -t 60 -d 900
npm run autocannon -- localhost:3000/nonBlocking -c 1000 -t 60 -d 900
```

Check the results by opening the Tilt dashboard (if using Tilt) or monitoring the terminal:

```bash
watch -n 1 kubectl get pod
watch -n 1 kubectl top pod
```

### Cleanup

After running all tests, delete the deployed resources:

```bash
minikube kubectl -- delete -f kubernetes.yaml
```

## Project Structure

The project includes a simple NestJS application with various endpoints to demonstrate different Node.js concepts:

- `/`: Hello World endpoint.
- `/blocking`: Endpoint simulating a blocking operation.
- `/nonBlocking`: Endpoint simulating a non-blocking operation.
- `/promises`: Endpoint showcasing asynchronous operations with Promises.
- `/parallelPromises`: Endpoint demonstrating parallel execution of Promises.

## Autoscaling

The Kubernetes deployment includes HorizontalPodAutoscaler for autoscaling based on CPU metrics.
Adjustments to the autoscaling behavior can be made in the `kubernetes.yaml` file under the `HorizontalPodAutoscaler`
section.

## Notes

- For a more interactive development experience, consider using Tilt.
  It provides real-time updates and logs for your application.
