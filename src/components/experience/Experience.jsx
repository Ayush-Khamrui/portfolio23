import React from 'react';
import './experience.css';

export default function Experience() {
    return (
        <div class="container" >
            <center className='text-light' style={{marginBottom:30}}><u><h1>Experience</h1></u></center>
    <div class="row" >
        <div class="col-md-12">
            <div class="main-timeline">
                <div class="timeline">
                    <div  class="timeline-content">
                        <div class="timeline-year">Sep 2022 - Current</div>
                        <h3 class="title">Analyst / Software Engineer</h3>
                        <h4 class="title">Capgemini</h4>
                        <p class="description text-light">
                            AWS Certified Cloud Practitioner<br/>
                            Technologies Used - React js, Spring cloud, Javascript, PostgreSQL, Java, Spring Boot, Git, JDBC, MongoDB, RabbitMQ, Discovery server
                        </p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <div class="timeline-year">Mar 2022 - June 2022 &nbsp;</div>
                        <h3 class="title">Software Engineer Intern</h3>
                        <h4 class="title">Capgemini</h4>
                        <p class="description text-light">
                        Developed a Car Wash Booking Application from end to end with a TDD-based development approach following agile methodology.<br/>
                        Developed a Student Management System portal from scratch.
                        </p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <div class="timeline-year">Aug 2021 - Sep 2021 &nbsp;</div>
                        <h3 class="title">Product Development Intern</h3>
                        <h4 class="title">Highradius</h4>
                        <p class="description text-light">
                        Developed an AI-Enabled Fintech B2B Cloud Application<br/> 
                        The use of the application was to predict the date of payment of the credit by the client
                        </p>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-content">
                        <div class="timeline-year">Feb 2020 - Mar 2020 &nbsp;</div>
                        <h3 class="title">Content Writer</h3>
                        <h4 class="title">BrandFoxie</h4>
                        <p class="description text-light">
                            Written approx. 5-6 SEO friendly article containing atleast 1000 words on various topics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        )
}
