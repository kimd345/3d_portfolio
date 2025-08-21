import { motion } from 'framer-motion';

import { styles } from '../styles';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const EducationCard = ({
	degree,
	school,
	location,
	duration,
	gpa,
	details,
}) => {
	return (
		<motion.div
			variants={fadeIn('up', 'spring', 0.5, 0.75)}
			className='bg-black-100 p-8 rounded-2xl w-full'
		>
			<div className='flex justify-between items-start mb-4'>
				<div>
					<h3 className='text-white text-[24px] font-bold'>{school}</h3>
					<p className='text-secondary text-[16px] font-semibold'>{location}</p>
				</div>
				<p className='text-secondary text-[14px] font-medium'>{duration}</p>
			</div>

			<div className='mb-4'>
				<p className='text-white text-[18px] font-medium italic'>{degree}</p>
				{gpa && (
					<p className='text-secondary text-[16px] mt-1'>
						<span className='font-semibold'>GPA:</span> {gpa}
					</p>
				)}
			</div>

			{details && details.length > 0 && (
				<ul className='mt-4 list-disc ml-5 space-y-2'>
					{details.map((detail, index) => (
						<li
							key={`education-detail-${index}`}
							className='text-white-100 text-[14px] pl-1 tracking-wider'
						>
							{detail}
						</li>
					))}
				</ul>
			)}
		</motion.div>
	);
};

const Education = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Academic background</p>
				<h2 className={styles.sectionHeadText}>Education</h2>
			</motion.div>

			<div className='mt-20 flex flex-col gap-10'>
				{education.map((edu, index) => (
					<EducationCard key={`education-${index}`} {...edu} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Education, 'education');
