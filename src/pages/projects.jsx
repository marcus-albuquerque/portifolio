import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

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
					<div className="projects-container">
						<div className="title projects-title">
							Projetos e Experiências: Minha contribuição para o
							ecossistema tech.
						</div>

						<div className="subtitle projects-subtitle">
							Durante minha jornada, desenvolvi uma variedade
							de projetos que refletem minha evolução e paixão por
							tecnologia. Cada um deles foi uma oportunidade de
							resolver problemas reais, unindo o desenvolvimento
							de software à eficiência da cultura DevOps. Muitos
							desses projetos são de código aberto e estão
							disponíveis para quem quiser explorar, aprender ou
							contribuir. Se você encontrar algo que desperte seu
							interesse, sinta-se à vontade para analisar o código
							e sugerir melhorias ou novas funcionalidades.
							Acredito que a colaboração é a ferramenta mais
							poderosa para o crescimento técnico, e estou sempre
							aberto a novas ideias e feedbacks construtivos.
						</div>

						<div className="projects-list">
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
