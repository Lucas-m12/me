import { HomeComponent } from 'components/Home';
import { TestimonialsComponent } from 'components/Testimonials';
import { WorksComponent } from 'components/Works';
import { Container } from 'styles/pages/home';

export default function Home() {
	return (
		<Container>
			<HomeComponent />
			<WorksComponent />
			<TestimonialsComponent />
		</Container>
	);
}
