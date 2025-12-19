import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiências"
				body={
					<div className="works-body">
						<div className="work">
							{/* <img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/> */}
							<div className="work-title">Instituto Infnet</div>
							<div className="work-subtitle">
								Auxiliar de Desenvolvimento de Software
							</div>
							<div className="work-duration">2022 - Presente</div>
						</div>

						<div className="work">
							{/* <img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/> */}
							<div className="work-title">Leste Telecom</div>
							<div className="work-subtitle">
								Estágio como Full Stack
							</div>
							<div className="work-duration">2025</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
