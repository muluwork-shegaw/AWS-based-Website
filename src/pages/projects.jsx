import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Button from "@mui/material/Button";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projectsSectionContainer">
						<div className="title projects-title">
							Things I’ve made
						</div>

						<div className="section-container">
							<h2>Experience</h2>
							<Experience />
						</div>
						<div className="section-container">
							<h2>Education</h2>
							<Education />
						</div>
						<div className="section-container">
							<h2>Skills</h2>
							<Skills />
						</div>
						<div className="section-container">
							<h2>Projects</h2>
							<AllProjects />
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

export default Projects;
