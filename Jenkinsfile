pipeline {
    agent any // මේ pipeline එක ඕනෑම agent කෙනෙක් මත දුවවන්න පුළුවන්

    stages {
        stage('Build') { // පළවෙනි අදියර: Build
            steps {
                // මේ stage එකේදී කරන්න ඕන පියවරවල්
                echo 'Building the application...'
                sh 'javac MyApp.java'
            }
        }
        stage('Test') { // දෙවෙනි අදියර: Test
            steps {
                // මේ stage එකේදී කරන්න ඕන පියවරවල්
                echo 'Testing the application...'
                sh './run-tests.sh'
            }
        }
        stage('Deploy') { // තුන්වෙනි අදියර: Deploy
            steps {
                // මේ stage එකේදී කරන්න ඕන පියවරවල්
                echo 'Deploying the application...'
            }
        }
    }
}
