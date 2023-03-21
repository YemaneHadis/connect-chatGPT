require("dotenv").config();
const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const cors = require('cors')


const app = express();
// app.use(cors());

app.use(express.json());
app.use(cors({
  origin: ['http://127.0.0.1:5173', 'http://localhost:5173']}));


// var corsOptions = {
//   origin: 'http://127.0.0.1:5173/',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const port = process.env.PORT || 5001;

app.post("/ask", async (req, res) => {
  let prompt = req.body.prompt;

  // let allInformationAboutme = "  "
  let allInformationAboutme = "I am Yemane Hadis Proficient Software Engineer with 5+ years of experience working as a professional full-stack developer focused on delivering quality solutions to the customer using best programming practices and design patterns"+
  "- Skilled software developer with expertise in implementing backend microservices using modern Java technologies such as Java, Spring Boot, Spring MVC, Hibernate, JPA, AOP, Spring Security, Kafka, and REST web services."
 + "- Experienced in creating interactive user interfaces with modern JavaScript libraries and frameworks such as React, and JQuery."+
  "- Skilled team player and Agile developer with successful project delivery and problem-solving skill  based this infomation answer"+
  "Designed Resilient and scalable Web API for Student Portal System API consumed by client web and mobile applications."
  "Designed and created a school management system based on microservice architecture."+
  "Performed Full Stack development and maintained applications with the interactive user interface using React."+
  "Played a key role in enhancing system quality through collaborative technical planning, design, and code review, leading to a 44-47% improvement."+
  "Post Deployment Activities, Production support including analysis, debugging, and bug fixing"+
  "Design and Develop Android Mobile Applications"
  "Skills: AWS CloudFormation · AWS Lambda · Amazon Dynamodb · Web Services · NetBeans · Amazon EC2 · Amazon Web Services (AWS) · Spring · Java · Spring Cloud · REST APIs · Spring MVC · SQL · Hibernate · MySQL · Spring Boot · Microservices · Apache Kafka · PostgreSQL · Docker"

  + "Created and integrated comprehensive microservices architecture."
  +"Containerized the entire application to create a portable and lightweight finished file."
  +"Prepared requirements (SRS) and design (SDD) documents."
  +"Collaborated with a diverse team to deliver solutions with high performance and quality"
  +"Boosted client satisfaction by over 50% through the implementation of cutting-edge back-end development and innovative UAT solutions"+
  "Skills: Apache Kadka · JUnit · RabbitMQ · Maven · Amazon EC2 · Amazon SQS · Amazon Web Services (AWS) · Spring · Java · Spring Cloud · REST APIs · Spring JPA · SQL · Spring Boot · Spring Security · PostgreSQL · Git · React.js · JSON Web Token (JWT) · Docker · GitHub"


  prompt = allInformationAboutme +prompt ;
  try {
    if (prompt == null) {
      throw new Error("Uh oh, no prompt was provided");
    }
    

    let response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100,
    });

    let completion = response.data.choices[0].text;

    return res.status(200).json({
      success: true,
      message: completion,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => console.log(`Server is running on port ${port}!!`));
