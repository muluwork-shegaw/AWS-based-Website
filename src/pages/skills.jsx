import React from "react";
import { getSkillsData } from "../data/skills";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
	transition: "transform 0.3s ease-in-out",
	"&:hover": {
		transform: "scale(1.05)",
		boxShadow: theme.shadows[10],
	},
	margin: theme.spacing(1),
	backgroundColor: theme.palette.background.paper,
	borderRadius: theme.shape.borderRadius,
	height: "150px", // Decreased the height of the card
}));

export default function Skills() {
	const skillsData = getSkillsData();

	return (
		<Box display="flex" flexWrap="wrap">
			{skillsData.map((data, index) => (
				<StyledCard
					key={index}
					sx={{ width: "300px", height: "145px" }}
				>
					<CardContent sx={{ height: "91px" }}>
						<Typography
							sx={{
								textAlign: "center",
								color: "#8692d2",

								mb: 1, // Added margin-bottom for spacing
							}}
						>
							{data.category}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{
								textAlign: "justify",
								background: "#453ff",
								paddingRight: "2px",
							}}
						>
							{data.skills.join(", ")}
						</Typography>
					</CardContent>
				</StyledCard>
			))}
		</Box>
	);
}
