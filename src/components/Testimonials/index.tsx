import Image from 'next/image';
import { Card, Container, Content } from './styles';

export const TestimonialsComponent: React.FC = () => {
	return (
		<Container id='testimonials'>
			<header>
				<h1>Depoimentos</h1>
				<p>
					Segue abaixo alguns depoimentos de colegas e clientes.
				</p>
			</header>
			<Content>
				<Card>
					<p>
						Lucas é um profissional exemplar, sempre muito solícito em ajudar. Trabalha muito bem equipe, sempre muito dedicado ao trabalho, um excelente profissional.
					</p>
					<div>
						<Image
							src='/hugo.jpeg'
							width={50}
							height={50}
							style={{ borderRadius: '50%' }}
						/>
						<h3>Hugo César</h3>
					</div>
				</Card>
				<Card>
					<p>
						Profissional competente sempre empenhado em colaborar com a equipe, comprometido com os prazos e com um vasto conhecimento em desenvolvimento web e mobile.
					</p>
					<div>
						<Image
							src='/arthur.jpeg'
							width={50}
							height={50}
							style={{ borderRadius: '50%' }}
						/>
						<h3>Arthur Rocha</h3>
					</div>
				</Card>
				<Card>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div>
						<Image
							src='/lucas.jpeg'
							width={50}
							height={50}
							style={{ borderRadius: '50%' }}
						/>
						<h3>Lucas</h3>
					</div>
				</Card>
				<Card>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div>
						<Image
							src='/lucas.jpeg'
							width={50}
							height={50}
							style={{ borderRadius: '50%' }}
						/>
						<h3>Lucas</h3>
					</div>
				</Card>
				<Card>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div>
						<Image
							src='/lucas.jpeg'
							width={50}
							height={50}
							style={{ borderRadius: '50%' }}
						/>
						<h3>Lucas</h3>
					</div>
				</Card>
				<Card>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div>
						<Image
							src='/lucas.jpeg'
							width={50}
							height={50}
							style={{ borderRadius: '50%' }}
						/>
						<h3>Lucas</h3>
					</div>
				</Card>
			</Content>
		</Container>
	);
};
