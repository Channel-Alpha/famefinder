# CAPSTONE PROJECT

## 1.0 Problem Statement

The aim of this project is to design a solution for recognising images of celebrities uploaded into an Amazon Web Service (AWS) Simple Storage Service (S3) bucket. The project aims to identify the most efficient and cost-effective solution by comparing the deployment of cloud resources as against non-cloud resources. These perspectives will be tested against the parameters of:
a. Elasticity
b. Fault Tolerance
c. High Availability
d. Resilience
e. Scalability
In this analysis, we will consider two different perspectives as a solution: the deployment of cloud resources or the deployment of non-cloud resources.

## 2.0 Background

The recognition of images of celebrities is an important task for many industries, such as mainstream entertainment businesses and the media. With advancements in computer vision and machine learning technologies, it is now possible to recognise images of celebrities with a high degree of accuracy. However, this requires a lot of computational resources, which can be expensive and time-consuming.
Therefore, it is important to design a solution that is both efficient and cost-effective.

## 3.0 Perspectives

### Perspective 1: Deployment of Cloud Resources

Cloud resources provide several advantages over traditional on-premises solutions. With cloud resources, we can scale our resources up or down as needed, which allows us to handle large workloads without incurring high costs. Additionally, cloud resources are often more secure and reliable than traditional on-premises solutions.
AWS provides various services for image recognition, including Amazon Rekognition. This is a fully managed service that provides high accuracy in image recognition. AWS Lambda provides a serverless computing platform, which automatically scales the system based on demand.

### Perspective 2: Deployment of Non-Cloud Resources

While cloud resources have several advantages, they can also be expensive, especially for smaller companies or organisations with limited budgets.
In the case of a non-cloud solution, a first option would require us to set up a physical server, install image recognition software and configure the system. In addition, the server would need to be maintained regularly, including hardware maintenance and software updates. This process is time-consuming and requires a significant amount of resources.
A second option would be to use open-source software such as TensorFlow, which is a machine learning library that can be used for image recognition. However, using open-source software requires a lot of expertise, which can be expensive to acquire.

### 4.0 Parameters

The project is to design a solution to recognise images of celebrities uploaded into an Amazon Web Service (AWS) Simple Storage Service (S3) bucket. The proposed solution is a cloud-based solution utilising AWS services such as Amazon Rekognition, Lambda, and S3.
This solution should provide:
a. High accuracy in image recognition;
b. Optimised for cost;
c. Elasticity;
d. Resiliency in terms of high availability;
e. Fault tolerance; and
f. Scalability.

### 4.1 Cost Optimisation

In a non-cloud solution, the cost of setting up a physical server, maintaining the hardware, and software updates are significant. In addition, we need to hire IT professionals to maintain the system, which adds to the overall cost.
With a cloud-based solution, the cost is optimised. AWS provides a pay-as-you-go model, which means that we only pay for the resources we use. This results in significant cost savings, as we do not have to invest in hardware or IT professionals.

### 4.2 Scalability

Scalability is essential in image recognition systems as the number of images processed increases over time. In the case of a non-cloud solution, scaling the system requires significant resources, including additional hardware and software updates. This process is time-consuming and requires additional IT professionals to maintain the system.
In a cloud-based solution, scalability is built-in. AWS Lambda provides a serverless computing platform that automatically scales the system based on demand. Additionally, Amazon Rekognition can process millions of images per day, providing a highly scalable solution.

### 5.0 Project Summary

Based on the analysis, we propose a cloud-based solution using AWS services such as Amazon Rekognition, Lambda, and S3. The solution provides high accuracy in image recognition, cost optimisation, and scalability.
When an image is uploaded to an S3 bucket, the Lambda function triggers an event and calls the Amazon Rekognition API to process the image. The Amazon Rekognition API returns the result, which is stored in the S3 bucket. The solution is highly scalable, and resources are allocated based on demand. Additionally, the solution is cost-optimised as we only pay for the resources we use.
With the proposed solution, we can process millions of images per day, providing an efficient and effective solution for image recognition.

# Contribution Guide

To contribute to this project, **you will need to have Node.js and npm installed on your machine**. You will also need to have Git installed to clone the repository.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine using `git clone`
2. Install the necessary dependencies by running `npm install`
3. Start the development server by running `npm run dev`
4. Open your web browser and navigate to <http://localhost:5173>
5. To deploy a static site for production run `npm tun build` .By default, the build output will be placed at dist. You may deploy this dist folder to any of your preferred platforms e.g S3 bucket
6. To test the production app locally run `npm run preview`
