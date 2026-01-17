import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaTag, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    // CONFIGURATION: Replace these with your actual EmailJS credentials
    // Sign up at https://www.emailjs.com/
    const EMAILJS_SERVICE_ID = 'service_5jwgdvj'; // e.g., 'service_gmail'
    const EMAILJS_TEMPLATE_ID = 'template_f8iag65'; // e.g., 'template_portfolio'
    const EMAILJS_PUBLIC_KEY = 'hwpOQypP1yEKmRBPg'; // e.g., 'user_123456789'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        if (EMAILJS_SERVICE_ID === 'service_id') {
            alert("Please configure your EmailJS credentials in src/components/Contact.jsx");
            setStatus('error');
            return;
        }

        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.error('Failed to send email:', error.text);
                setStatus('FAILED: ' + error.text);
                setTimeout(() => setStatus(''), 8000);
            });
    };

    return (
        <section id="contact" className="py-24 bg-space-black relative overflow-hidden perspective-2000">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,180,216,0.1),transparent_60%)] pointer-events-none"></div>

            {/* Floating Geometric Background Shapes */}
            <motion.div
                animate={{ rotate: 360, y: [0, -50, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 left-10 w-40 h-40 border-2 border-neon-lime/10 rounded-full border-dashed z-0"
            ></motion.div>
            <motion.div
                animate={{ rotate: -360, y: [0, 50, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-20 right-10 w-60 h-60 border-2 border-hot-magenta/10 rotate-45 z-0"
            ></motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="text-center mb-16 relative">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 text-3d-massive"
                    >
                        Let's Connect
                    </motion.h2>
                    <p className="text-xl text-text-secondary">Have a project idea? Let's build something amazing!</p>
                </div>

                {/* Massive Holographic Form Card */}
                <motion.div
                    initial={{ opacity: 0, rotateX: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-3xl relative perspective-1000 group"
                >
                    {/* Rotating Gradient Border */}
                    <div className="absolute -inset-[3px] rounded-[30px] bg-gradient-to-r from-neon-lime via-electric-blue to-hot-magenta opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"></div>

                    <div className="relative bg-[#1c2333]/90 backdrop-blur-2xl p-8 md:p-12 rounded-[28px] shadow-[0_30px_100px_rgba(0,0,0,0.8)] border border-white/10 transform-style-3d overflow-hidden">

                        {/* Holographic Scanline Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] bg-[size:100%_4px] pointer-events-none z-0"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-0"></div>

                        {/* Form Header */}
                        <div className="relative z-10 flex items-center gap-6 mb-10 pb-6 border-b border-white/10">
                            <div className="w-16 h-16 rounded-2xl bg-[#0a0e27] flex items-center justify-center text-3xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border border-white/5 group-hover:shadow-neon-lime transition-all duration-500">
                                <span className="text-neon-lime drop-shadow-md">✉️</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white font-heading">Send a Message</h3>
                                <p className="text-text-muted text-sm mt-1">I usually respond within 24 hours.</p>
                            </div>
                        </div>

                        <form ref={form} onSubmit={sendEmail} className="space-y-8 relative z-10">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Name Input */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-electric-blue uppercase tracking-wider ml-1">Name</label>
                                    <div className="relative group/input perspective-500">
                                        <div className="absolute inset-0 bg-[#0a0e27] rounded-xl transform translate-z-[-10px]"></div>
                                        <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within/input:text-neon-lime transition-colors z-20 pointer-events-none" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-[#0a0e27] border border-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_0_rgba(255,255,255,0.1)] rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:translate-z-2 focus:shadow-[0_0_20px_rgba(57,255,20,0.2)] focus:border-neon-lime/50 relative z-30"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-electric-blue uppercase tracking-wider ml-1">Email</label>
                                    <div className="relative group/input perspective-500">
                                        <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within/input:text-neon-lime transition-colors z-20 pointer-events-none" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-[#0a0e27] border border-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_0_rgba(255,255,255,0.1)] rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:translate-z-2 focus:shadow-[0_0_20px_rgba(57,255,20,0.2)] focus:border-neon-lime/50 relative z-30"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-hot-magenta uppercase tracking-wider ml-1">Subject</label>
                                <div className="relative group/input perspective-500">
                                    <FaTag className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within/input:text-hot-magenta transition-colors z-20 pointer-events-none" />
                                    <input
                                        type="text"
                                        name="title"
                                        required
                                        className="w-full bg-[#0a0e27] border border-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_0_rgba(255,255,255,0.1)] rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:translate-z-2 focus:shadow-[0_0_20px_rgba(255,0,110,0.2)] focus:border-hot-magenta/50 relative z-30"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-bright-orange uppercase tracking-wider ml-1">Message</label>
                                <div className="relative group/input perspective-500">
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full bg-[#0a0e27] border border-transparent shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_0_rgba(255,255,255,0.1)] rounded-xl py-4 px-6 text-white placeholder:text-white/20 outline-none transition-all duration-300 focus:translate-z-2 focus:shadow-[0_0_20px_rgba(255,109,0,0.2)] focus:border-bright-orange/50 resize-none relative z-30"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button - MASSIVE RAISED 3D */}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full relative group/btn h-16 perspective-1000 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-electric-blue-dark rounded-xl transform translate-y-2 group-hover/btn:translate-y-3 transition-transform duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-lime to-electric-blue rounded-xl flex items-center justify-center gap-3 text-space-black font-bold text-xl uppercase tracking-wider shadow-neon-lime transform group-hover/btn:-translate-y-1 transition-all duration-300 border-t border-white/30">
                                    {status === 'sending' ? 'Sending...' : (
                                        <>Send Message <FaPaperPlane /></>
                                    )}
                                </div>
                            </button>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-neon-lime/10 border border-neon-lime/30 rounded-xl text-neon-lime text-center font-bold"
                                >
                                    Message sent successfully!
                                </motion.div>
                            )}
                            {status.startsWith('FAILED') && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-hot-magenta/10 border border-hot-magenta/30 rounded-xl text-hot-magenta text-center font-bold"
                                >
                                    {status}
                                </motion.div>
                            )}
                        </form>
                    </div>

                    {/* Direct Contact Pills */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6">
                        {[
                            { icon: <FaEnvelope />, text: "deepthikumar604@gmail.com", color: "text-neon-lime", border: "border-neon-lime" },
                            { icon: <FaMapMarkerAlt />, text: "Bangalore, India", color: "text-electric-blue", border: "border-electric-blue" },
                            // { icon: <FaPhoneAlt />, text: "+91 xxxxx xxxxx", color: "text-hot-magenta", border: "border-hot-magenta" }
                        ].map((item, idx) => (
                            <div key={idx} className={`px-6 py-3 rounded-full bg-[#0a0e27] border ${item.border} ${item.color} font-bold flex items-center gap-3 shadow-lg hover:scale-105 transition-transform cursor-default`}>
                                {item.icon} {item.text}
                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
