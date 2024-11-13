import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
    return (
        <section className="faq py-80">
            <div className="faq-area pt-100 pb-70">
                <div className="container">
                    <div className="faq-accordion">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Why is my phone locked even after making a payment?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                        Ensure your payment was successful and wait for the system to update. If your phone remains
                                        locked, contact customer support with your payment details.
                                        </p>
                                        <ul>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How can I check my phone balance?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>
                                        Dial <Link to="tel:*797#">*797#</Link> on your phone to view your current balance and payment details.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Why is my phone still locked after paying twice?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Verify both payments were successful. If the issue persists, provide the payment confirmation
                                        details to customer support for assistance, and the issue shall be resolved as soon as possible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How do I change my phone number in the system?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Contact customer support with your old and new phone numbers and request for an update.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    What should I do if my phone was stolen?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Report the theft to the police immediately and obtain a police abstract and an OB number. Email the abstract, OB number and a scanned copy of your national ID to our support team via <Link to="mailto:customercare@onfonmobile.com">customercare@onfonmobile.com</Link> and they shall issue you with further instructions with regards to the process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Why do I receive purchase codes for transactions I didn’t make?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Report any unauthorized transactions to customer support immediately for investigation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    Why does my phone display a “System UI not responding” message?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Restart your phone. If the problem persists, consider resetting the device or contacting customer
                                        support for technical assistance, and you will be assisted.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    Why does my phone get locked even after payment?
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Ensure payments are made well before the due time. Contact support if your phone locks
                                        unexpectedly despite timely payments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    How can I return my phone?
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Contact customer support for instructions on returning the phone and terminating your contract. You can also visit us at our service center which is located at Emperor Plaza (next to GPO Nairobi), on the 5th floor room 516.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    Why are there additional charges on my phone balance?
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Check your payment history and contact customer support for a detailed breakdown of your
                                        charges.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEleven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                    How do I unlock my phone after making a payment?
                                    </button>
                                </h2>
                                <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Once the payment is confirmed, you will receive a code to unlock your phone. If
                                        not, contact customer support for an unlock code.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwelve">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                    Why is my USB file transfer blocked?
                                    </button>
                                </h2>
                                <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Ensure USB preferences are correctly set in your phone’s settings. If blocked, contact support for
                                        further assistance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThirteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                    Why is my payment plan changed one amount to another?
                                    </button>
                                </h2>
                                <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Payment plans are only adjusted based on your payment plan of choice. Contact customer
                                        support for clarification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFourteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                    How do I qualify for a phone upgrade?
                                    </button>
                                </h2>
                                <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Complete the payments for your current phone, then dial <Link to="tel:*797#">*797#</Link> and see which other phones you
                                        qualify to get an upgrade for.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFifteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                    Why can’t I download music or videos on my phone?
                                    </button>
                                </h2>
                                <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Certain restrictions may apply to your phone. Contact customer support for details on unlocking
                                        or modifying these restrictions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSixteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                    What does “phone belongs to an organization” mean?
                                    </button>
                                </h2>
                                <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>This message indicates the phone is under a leasing agreement. Once payments are complete,
                                        contact support to remove this message.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeventeen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                                    Can I trade in my current phone for an upgrade?
                                    </button>
                                </h2>
                                <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>We do not currently offer a trade-in program. Complete your current payments before purchasing
                                        a new phone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEighteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                                    How do I resolve an issue with uninstalled apps like M-Pesa?
                                    </button>
                                </h2>
                                <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>If the apps keep uninstalling themselves, kindly contact customer support for further assistance
                                        immediately.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNineteen">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                                    Why can’t I reach customer support by phone?
                                    </button>
                                </h2>
                                <div id="collapseNineteen" className="accordion-collapse collapse" aria-labelledby="headingNineteen" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>High call volumes may cause delays sometimes. You can use email or social media channels for
                                        quicker responses from our customer support team.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwenty">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                                    Why does my phone battery drain quickly and overheat?
                                    </button>
                                </h2>
                                <div id="collapseTwenty" className="accordion-collapse collapse" aria-labelledby="headingTwenty" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Avoid using intensive apps and charge your phone properly. If the issue continues, contact
                                        support for a potential device check.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;