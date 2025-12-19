import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Entre em contato e vamos construir algo juntos!
						</div>

						<div className="subtitle contact-subtitle">
							Obrigado pelo interesse em se conectar. Valorizo
							muito a troca de ideias, feedbacks e novas
							oportunidades de colaboração. Se você tiver uma
							proposta, uma dúvida técnica ou apenas queira
							conversar sobre desenvolvimento e DevOps, sinta-se à
							vontade para me enviar um e-mail diretamente em:
							&nbsp;{""}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Faço o possível para responder a todas as
							mensagens em até 24 horas, mesmo em dias mais
							produtivos e intensos. Para conversas mais ágeis ou
							conexões profissionais, você também pode me
							encontrar no LinkedIn ou me chamar diretamente no
							WhatsApp. Acredito que a comunicação direta é a
							melhor forma de construir soluções eficientes, então
							não hesite em me dar um "ping" por lá. Obrigado mais
							uma vez pelo seu interesse, e espero conversarmos em
							breve!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
