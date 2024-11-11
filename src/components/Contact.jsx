import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

// EmailJS pub_key: 6zHKygo3CDK__96aD
// EmailJS template_id: template_b7b72q6
// Gmail key: service_pfnf21d

const Contact = () => {
	const formRef = useRef()
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target

		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)

		emailjs
			.send(
				'service_pfnf21d',
				'template_b7b72q6',
				{
					from_name: form.name,
					to_name: 'Dan Kim',
					from_email: form.email,
					to_email: 'kimd345@gmail.com',
					message: form.message,
				},
				'6zHKygo3CDK__96aD'
			)
			.then(() => {
				setLoading(false)
				alert('Thank you. I will get back to you as soon as possible.')

				setForm(
					{
						name: '',
						email: '',
						message: '',
					},
					(error) => {
						setLoading(false)

						console.log(error)

						alert('Something went wrong.')
					}
				)
			})
	}

	return (
		<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'
				>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Name</span>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className='bg-tertiary py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outlined-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Email</span>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className='bg-tertiary py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outlined-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your Message</span>
						<textarea
							rows='7'
							name='message'
							value={form.message}
							onChange={handleChange}
							placeholder="Don't be a stranger!"
							className='bg-tertiary py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outlined-none border-none font-medium'
						/>
					</label>

					<button
						type='submit'
						className='hover:opacity-90 bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, 'contact')
