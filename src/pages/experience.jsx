import React from "react";
import { getExperience } from "../data/experience"; // Replace with the actual path to your data file
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ExperienceTimeline() {
	const experienceData = getExperience();

	return (
		<Timeline align="left">
			{experienceData.map((exp, index) => (
				<TimelineItem key={index}>
					<TimelineOppositeContent sx={{ py: "12px", px: 2 }}>
						<Typography
							variant="h6"
							component="span"
							sx={{ color: "#8692d2" }}
						>
							{exp.role}
						</Typography>
						<Typography color="text.secondary">
							{exp.company}
						</Typography>
						<Typography color="text.secondary">
							{exp.location}
						</Typography>
						<Typography color="text.secondary">
							{exp.period}
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot sx={{ color: "#514e4f" }}>
							<WorkIcon sx={{ color: "#514e4f" }} />
						</TimelineDot>
						{index < experienceData.length - 1 && (
							<TimelineConnector />
						)}
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						{exp.details.map((detail, detailIndex) => (
							<Box
								key={detailIndex}
								color="text.secondary"
								sx={{
									display: "flex",
									alignItems: "center",
									mb: 0.5,
								}}
							>
								<Box
									sx={{
										color: "primary.main",
										mr: 1,
										fontWeight: "bold",
									}}
								>
									•
								</Box>{" "}
								{/* Styled bullet */}
								<Typography variant="body2">
									{detail}
								</Typography>
							</Box>
						))}
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
}
