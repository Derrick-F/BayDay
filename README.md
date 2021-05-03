Overview: BayDay is a simple, easy to use vehicle maintenance bay status app which helps the user track work being done in a service shop's bays. The graphical interface let's the user simply check a bay and see what if any vehicle is being worked on, and what the status of it is. What's more, we can get a description of details for the job and which technician is working on it. A logged in user can add new trucks and jobs to the system as well. 

https://app.codeship.com/projects/dd058dbf-e19d-45ca-b5e7-f9a03ea103b9/status?branch=master


Setup: Ruby Version: 2.7.3 Rails Version: 5.2.5 Bundler Version: 2.2.15

Getting Started:

After you fork, clone, or download the repo, execute the following commands to run the application locally:

$ bundle install $ yarn install

To build the PostgreSQL database:

$ bundle exec rake db:create $ bundle exec rake db:migrate $ bundle exec rake db:seed

To view the app in development locally at https://localhost:3000/ Run the following commands in separate terminal windows:

$ rails s $ yarn start

Currently in development: Main Bay menu which will display each bay, see if it is filled and click on it to view more details of the working being conducted. 