# legal-study-helper
Helper tool that automates the process of extracting key features in peer-reviewed studies for legal experts to quickly sort/find evidence for cases. This project consists of a Python/Flask backend and a React frontend.

## Prerequisites
You will need to have Python/Pip and Node.js/NPM installations on your local machine. You will also need access to an OpenAI api key. You can make an account <a href="https://auth0.openai.com/u/signup/identifier?state=hKFo2SBJWWhmaEhmakRTNGpNalpVbWpLTVZSUEFoUWh4RWM0ZqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHE0djdHeThQd0k5aDBuWkRSLXQyZUxxU1hKVVg5Z2hFo2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q">here</a> and then generate an api key <a href="https://platform.openai.com/account/api-keys">here</a>

## Backend Guide
Backend Python code is in the ```/backend``` folder. It requires Flask setup before it can be started.
### Setup
The setup only need to be run once. If you have already done these steps, you can skip to **Start Backend**
First, navigate to backend folder ```cd  backend``` and run the following commands to install the necessary dependencies <br/>```pip install virtualenv```<br/> ```virtualenv venv```  <br/>```pip install Flask PyPDF2 openai```<br/>

Next, copy your OpenAI api key ![Capture](Capture.PNG)

and paste it in the ```openai.api_key``` variable in ```main.py``` 

![Capture2](Capture2.PNG)

### Start Backend
Activate the virtual environment ```venv\Scripts\activate```
start the backend by running ```python main.py```

## Start Frontend 
Frontend code is in the ```/fronend``` folder. To start your server, navigate into the frontend folder ```cd frontend```, and run ```npm run start```. Then navigate to [localhost:3000](http://localhost:3000/)
