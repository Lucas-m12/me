import { Button } from 'components/Button';
import workedAreas from 'mocks/workedAreas.json';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Content, DescriptionArea, Header, Menu, WorkedArea } from './styles';

export const HomeComponent: React.FC = () => {

	return (
		<Container id='home'>
			<Header>
				<Menu>
					<ul>
						<li>
							<Link href='/#home'>
								<a href='/#home'>
									Ínicio
								</a>
							</Link>
						</li>
						<li>
							<Link href=''>
								<a href=''>
									Trabalhos
								</a>
							</Link>
						</li>
						<li>
							<Link href='/#testimonials'>
								<a href='/#testimonials'>
									Depoimentos
								</a>
							</Link>
						</li>
						<li>
							<Link href=''>
								<a href=''>
									Entrar em contato
								</a>
							</Link>
						</li>
					</ul>
					<div>
						<Link
							href='https://www.linkedin.com/in/lucas-marinho-da-silva-a2bbab174/'
							target="_blank"
						>
							<a
								href="https://www.linkedin.com/in/lucas-marinho-da-silva-a2bbab174/"
								target="_blank" rel="noreferrer"
							>
								<i>
									<Image
										src="/LinkedIn.svg"
										width={15}
										height={15}
									/>
								</i>
							</a>
						</Link>
						<Link
							href='https://github.com/lucas-m12'
							target="_blank"
						>
							<a
								href="https://github.com/lucas-m12"
								target="_blank" rel="noreferrer"
							>
								<i>
									<Image
										src="/Github.svg"
										width={15}
										height={15}
									/>
								</i>
							</a>
						</Link>
					</div>
				</Menu>
			</Header>
			<Content>
				<DescriptionArea>
					<h1>Lucas Marinho</h1>
					<p>
						Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<Button
						variant="success"
						size="medium"
					>
						Vamos começar &gt;
					</Button>
				</DescriptionArea>
				<div>
					<Image
						src="/lucas.jpeg"
						width={350}
						height={350}
						style={{
							borderRadius: '50%',
						}}
					/>
				</div>
			</Content>
			<WorkedArea>
				<ul>
					{
						workedAreas.map(area => (
							<li key={area.name}>
								<Image
									src={area.logo}
									width={50}
									height={50}
									style={{
										opacity: 0.3
									}}
								/>
								<h3>{area.name}</h3>
							</li>
						))
					}
				</ul>
			</WorkedArea>
		</Container>
	);
};
