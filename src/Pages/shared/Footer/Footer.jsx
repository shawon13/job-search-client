
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import job from '../../../assets/job.png'
import { TbReportSearch } from 'react-icons/tb';
const Footer = () => {
    return (
        <section className='py-12' style={{ backgroundColor: '#202942' }}>
            <Container maxWidth='lg'>
                <Box >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={4} className='text-white'>
                            <h2 className='text-3xl text-white font-semibold mb-5 flex items-center'>
                                <TbReportSearch className='text-6xl' />
                                JobSearch</h2>
                            <p className='leading-7'>A job search website connects job seekers with potential employers by providing a platform to browse, apply for, and manage job listings across various industries. It offers search filters, resume uploads, and employer profiles to streamline the job application process.</p>
                            <ul className='space-y-2.5 capitalize mt-5'>
                                <li className='flex items-center'><FaPhoneAlt className='mr-2.5' />+123 456 7890</li>
                                <li className='flex items-center'><FaEnvelope className='mr-2.5' />jobsearch@gmail.com</li>
                            </ul>
                        </Grid>
                        <Grid size={3} className='text-white'>
                            <h4 className='text-3xl text-white font-semibold mb-2.5'>For candidate</h4>
                            <ul className='space-y-2.5 capitalize'>
                                <li>Add a resume</li>
                                <li>candidate dashbord</li>
                                <li>past application</li>
                                <li>job alerts</li>
                                <li>Bookmarks</li>
                                <li>my account</li>
                                <li>your jobs</li>
                            </ul>
                        </Grid>
                        <Grid size={3} className='text-white'>
                            <h4 className='text-3xl text-white font-semibold mb-2.5'>For Employers</h4>
                            <ul className='space-y-2.5 capitalize'>
                                <li>Add a resume</li>
                                <li>candidate dashbord</li>
                                <li>past application</li>
                                <li>job alerts</li>
                                <li>Bookmarks</li>
                                <li>my account</li>
                                <li>your jobs</li>
                            </ul>
                        </Grid>
                        <Grid size={2} className='text-white'>
                            <h4 className='text-3xl text-white font-semibold mb-2.5'>Information</h4>
                            <ul className='space-y-2.5 capitalize'>
                                <li>about us</li>
                                <li>terms & conditions</li>
                                <li>privacy policy</li>
                                <li>careers with us</li>
                                <li>sitemap</li>
                                <li>contact us</li>
                                <li>FAQs</li>
                            </ul>
                        </Grid>
                        <Grid size={12}>
                            <div className='flex justify-between text-white mt-10'>
                                <h4 className='flex items-center'><FaRegCopyright className='mr-2' />2024 JobSearch. Design with  by Shawon.</h4>
                                <ul className='flex items-center'>
                                    <Link className='text-xl'> <li className='mr-5 border rounded p-2'><FaFacebookF /></li></Link>
                                    <Link className='text-xl'> <li className='mr-5 border rounded p-2'><FaXTwitter /></li></Link>
                                    <Link className='text-xl'> <li className='mr-5 border rounded p-2'><FaInstagram /></li></Link>
                                    <Link className='text-xl'> <li className=' border rounded p-2'><FaLinkedinIn /></li></Link>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </ Container>
        </section>
    );
};

export default Footer;