import { Loader } from '@/components'

const loading = () => {
	return (
		<section className="flex-center min-h-[45vh]">
			<Loader height="100%" width="100%" size="40px" text="Loading..." />
		</section>
	)
}

export default loading
