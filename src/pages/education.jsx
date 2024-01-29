import React from "react";
import { getEducation } from "../data/education"; // Modify the path as necessary

// Replace with the actual path to your data file
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";

export default function EducationTimeline() {
	const educationData = getEducation();

	return (
		<Timeline position="alternate">
			{educationData.map((edu, index) => (
				<TimelineItem key={index}>
					<TimelineSeparator>
						<TimelineDot variant="h6" sx={{ color: "#514e4f" }}>
							<SchoolIcon sx={{ color: "#514e4f" }} />
						</TimelineDot>
						{index < educationData.length - 1 && (
							<TimelineConnector />
						)}
					</TimelineSeparator>
					<TimelineContent>
						<Typography
							variant="h6"
							component="span"
							sx={{ color: "#8692d2" }}
						>
							{" "}
							{edu.degree}
						</Typography>
						<Typography>{edu.institution}</Typography>
						<Typography color="text.secondary">
							{edu.period}
						</Typography>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
}
