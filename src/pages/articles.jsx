import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="articles-container">
							<div className="articles-wrapper">
								<h2>
									Explore the convenience of hosting your
									React portfolio on AWS by leveraging
									essential services like S3, CloudFront, and
									more, ensuring a website that is both secure
									and high-performing.
								</h2>
								<div>
									<img
										style={{
											width: "100%",
											height: "auto",
											display: "block",
											margin: "0 auto",
										}}
										src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*I4s_VY1Ju7QuXb07bJXTGA.png"
									/>
								</div>
								<div className="aws-steps-container">
									<h3>
										Step 1: Amazon S3 (Simple Storage
										Service)
									</h3>
									<p>
										Amazon S3, a versatile object storage
										service, proves optimal for a static
										React portfolio. Take the following
										steps:
									</p>
									<ul>
										<li>
											Create a new S3 bucket dedicated to
											storing static content, encompassing
											HTML, CSS, JavaScript, and images.
										</li>
										<li>
											Enable static website hosting for
											your S3 bucket.
										</li>
										<li>
											Upload your React application's
											build directory to the S3 bucket by
											executing <code>npm run build</code>
											.
										</li>
									</ul>

									<h3>Step 2: Amazon CloudFront</h3>
									<p>
										Amazon CloudFront, a dynamic content
										delivery network (CDN) service, elevates
										data delivery speed. Execute the
										following actions:
									</p>
									<ul>
										<li>
											Set up a new CloudFront
											distribution.
										</li>
										<li>
											Choose the S3 bucket created in Step
											1 as the "Origin Domain Name."
										</li>
										<li>
											Activate "Compress Objects
											Automatically" to enhance
											performance.
										</li>
										<li>
											Designate <code>index.html</code> as
											the "Default Root Object."
										</li>
										<li>
											Access your website using the
											distinctive URL provided by
											CloudFront.
										</li>
									</ul>

									<h3>Step 3: AWS Lambda</h3>
									<p>
										While AWS Lambda offers serverless code
										execution capabilities, it may not be
										essential for a static React website.
									</p>

									<h3>Step 4: Amazon Route 53</h3>
									<p>
										Amazon Route 53, a scalable DNS
										solution, guarantees easy access to your
										website. Follow these steps:
									</p>
									<ul>
										<li>
											Register a domain to serve as your
											website's URL.
										</li>
										<li>
											Create a new "Hosted zone" and set
											up a "Record Set."
										</li>
										<li>
											Configure "Alias" to yes and select
											the CloudFront distribution from
											Step 2 as the "Alias Target."
										</li>
									</ul>

									<h3>Step 5: AWS Certificate Manager</h3>
									<p>
										Simplify SSL/TLS certificate management
										with AWS Certificate Manager:
									</p>
									<ul>
										<li>
											Request a new public certificate.
										</li>
										<li>
											Input your domain name from Step 4.
										</li>
										<li>
											Validate the certificate through DNS
											or email verification.
										</li>
										<li>
											After issuance, adjust your
											CloudFront distribution settings to
											use this certificate for HTTPS
											connections.
										</li>
									</ul>

									<p>
										Remember to tailor each service's
										configuration to align with your
										specific use case. For precise
										implementation guidance, refer to AWS
										documentation or seek advice from a
										cloud solutions architect. Enjoy
										seamless hosting for your React
										portfolio!
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
