import React from 'react'
import { Link } from  'react-router-dom';

const About = () => {
    return(
        <section className="about py-80">
            <div className="container container-lg">
                <div className="about__inner flex-between flex-wrap gap-16">
                    <div className="w-100">
                        <h3 className="text-heading fw-medium mb-24">About Us</h3>
                        <p className="text-md text-heading mb-24">Onfon Mobile was established in 2022 as a subsidiary of Onfon Group. It was created to spearhead the supply of affordable smartphones across Africa. The company has its headquarters in Nairobi, Kenya. This main branch covers the East and Central African market. The company has branches in Kampala, Uganda and Dar-es Salaam, Tanzania to support the main branch in the East African market. It has a branch in Lagos, Nigeria to cater for the West African market. The company also has a branch in Maputo, Mozambique to serve the South African market.</p>
                    </div>
                    <div className="col-lg-4 ps-xl-4">
                        <div className="about-sidebar border border-gray-100    rounded-8 p-32 mb-4">
                            <img
                                src="assets/images/about.png"
                                alt="about"
                                className="w-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About