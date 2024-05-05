$authNetwork = docker network ls | Select-String -Pattern "auth-net" | Measure-Object
$authNetwork = $authNetwork.Count

# Create network if it does not exist
if ($authNetwork -eq 0) {
    docker network create --driver bridge auth-net
}

# Run the Docker container
docker run -dit --rm -p 3000:3000 app/frontend
