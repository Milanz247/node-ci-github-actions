// Jenkinsfile.scripted


node {
    // Variable definitions
    def dockerImageName = "miilanz247/node-app-scripted" 
    def projectDir      = "node-ci-github-actions"
    def dockerImageTag

    try {
        stage('Preparation') {
            echo "--> Preparing the build environment..."

            // Checkout the source code from the configured SCM
            checkout scm
            
            // Set the image tag using the build number
            dockerImageTag = "${env.BUILD_NUMBER}"
            echo "Pipeline started for build number: ${dockerImageTag}"
            echo "Image will be named: ${dockerImageName}:${dockerImageTag}"
        }

        stage('Build Docker Image') {
            echo "--> Building the Docker image..."
            
            sh '''
                cd ${projectDir}
                docker build -t ${dockerImageName}:${dockerImageTag} .
            '''
        }

        stage('List Docker Images') {
            echo "--> Listing Docker images to verify the build..."
            sh "docker images | grep '${dockerImageName}'"
        }

        // Set the build result to SUCCESS explicitly
        currentBuild.result = 'SUCCESS'
        echo "Hooray! The pipeline was successful."

    } catch (err) {
        // If any stage fails, this block will run
        echo "Oops! An error occurred: ${err.getMessage()}"
        currentBuild.result = 'FAILURE'
        // Re-throw the error to make sure the pipeline is marked as failed
        throw err
    } finally {
        // This block runs whether the pipeline succeeds or fails
        echo "--> Pipeline finished. Cleaning up workspace..."
        cleanWs()
    }
}
