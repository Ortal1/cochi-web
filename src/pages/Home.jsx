import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Sparkles, Users, Clock, Mail, Phone, User, ChevronDown, Star, Award, TrendingUp, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};

const float = {
    initial: { y: 0 },
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export default function Home() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email via FormSubmit
            const response = await fetch('https://formsubmit.co/ajax/Cochi1505@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    _subject: 'ליד חדש מאתר יצירת זוגיות',
                })
            });

            if (response.ok) {
                // Track lead conversion in Meta Pixel
                if (typeof fbq === 'function') {
                    fbq('track', 'Lead');
                }
                setSubmitted(true);
                setFormData({ name: '', phone: '', email: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('אירעה שגיאה, אנא נסו שוב');
        } finally {
            setIsSubmitting(false);
        }
    };

    const scrollToForm = () => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#FFF9F4] to-[#F5F0EB] text-[#4A4543] relative overflow-hidden" dir="rtl">

            {/* Interactive cursor follower - hidden on mobile */}
            <motion.div
                className="hidden md:block fixed w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl opacity-20"
                style={{
                    background: 'radial-gradient(circle, #C4A4A0 0%, transparent 70%)',
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-12 md:py-20 relative overflow-hidden">
                {/* Beautiful gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FDF8F6] via-[#FFF5F0] to-[#F8F4F1]" />

                {/* Decorative circles pattern */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(196,164,160,0.15) 0%, transparent 70%)',
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(168,181,160,0.12) 0%, transparent 70%)',
                        }}
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(196,164,160,0.08) 0%, transparent 70%)',
                        }}
                        animate={{
                            x: [0, 60, 0],
                            y: [0, -40, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(179,148,144,0.1) 0%, transparent 70%)',
                        }}
                        animate={{
                            x: [0, -40, 0],
                            y: [0, 30, 0],
                        }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* Floating sparkles - fewer on mobile */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${i > 2 ? 'hidden md:block' : ''}`}
                        style={{
                            top: `${15 + (i * 15)}%`,
                            left: `${10 + (i * 14)}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                        }}
                    >
                        <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#C4A4A0]/40" />
                    </motion.div>
                ))}

                <motion.div
                    className="max-w-4xl mx-auto text-center relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    style={{ opacity, scale }}
                >
                    {/* Mentor name with elegant styling */}
                    <motion.div variants={fadeInUp} className="mb-6 md:mb-10">
                        <motion.div
                            className="inline-block relative"
                            animate={{
                                y: [0, -5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl md:text-8xl font-light mb-6 md:mb-8 leading-tight"
                    >
                        <span className="bg-gradient-to-l from-[#C4A4A0] via-[#8B7B77] to-[#A8B5A0] bg-clip-text text-transparent">
                           ״באה מאהבה״
                        </span>
                    </motion.h1>

                    <motion.div variants={fadeInUp} className="mb-8 md:mb-12">
                        <motion.p
                            className="text-lg sm:text-xl md:text-3xl font-light text-[#7A706C] leading-relaxed px-2"
                            animate={{
                                opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            תכנית בת 8 מפגשים לפריצות דרך בזוגיות
                        </motion.p>
                        <p className="text-base sm:text-lg md:text-xl font-light text-[#9A8A86] mt-3 md:mt-4 tracking-wide">
                            בהנחיית <span className="text-lg sm:text-xl md:text-3xl font-medium text-[#6B5D59]">כוכי כהן הדר</span>
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <motion.div
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                onClick={scrollToForm}
                                className="bg-gradient-to-l from-[#C4A4A0] via-[#B89E9A] to-[#A8B5A0] hover:from-[#B39490] hover:via-[#A8918D] hover:to-[#98A590] text-white px-8 py-6 md:px-14 md:py-8 text-base md:text-xl rounded-full shadow-2xl shadow-[#C4A4A0]/40 transition-all duration-500 relative overflow-hidden group border border-white/20"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-l from-white/30 via-white/10 to-transparent"
                                    animate={{
                                        x: [-300, 300],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <span className="relative font-medium">השאירו פרטים</span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-[#B39490] text-xs tracking-wider">גללו למטה</span>
                        <ChevronDown className="w-5 h-5 text-[#C4A4A0]" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Love and Relationships Philosophy Section */}
            <section className="py-12 md:py-24 px-4 md:px-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />

                <motion.div
                    className="max-w-3xl mx-auto relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={stagger}
                >
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                        <motion.div
                            className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#C4A4A0] to-transparent mx-auto mb-8"
                            animate={{
                                scaleX: [0.8, 1, 0.8],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-base md:text-xl leading-relaxed text-[#5A5550]">
                        <motion.p
                            className="text-lg md:text-2xl font-light"
                            whileHover={{ scale: 1.02 }}
                        >
                            אהבה וזוגיות  זו דרך להיות.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            אם נחשוב לרגע, על כמות הספרים והסרטים שנכתבו ונוצרו על אהבה,
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            זו הרי כמות בלתי נתפשת!
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            זוהי  הכמיהה הראשונית ,הבסיסית והמשותפת לכולנו, להיות <span className="font-medium text-[#8B7B77]">אוהבים ונאהבים</span> ותחושת החסר עמוקה מאד וקשה מאד, כאשר אדם חווה בדידות.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            לכן ,כאשר החיבור הזוגי מתממש ,כמו קסם, מתגבשים כמעט מיד, רצון ומחויבות לשמור עליו מכל משמר, כעל אוצר נדיר.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            אנשים רבים כל כך, דרכים רבות כל כך, לבטא את הרצון העז בקשר של אהבה.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            וזה לא תמיד פשוט.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            זה מסע שמפגיש אותנו , כמעט אוטומטית, עם הפחדים העמוקים ביותר שלנו ובמסע הזה, יש <span className="font-medium text-[#C4A4A0]">רגעי חסד</span>.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            הנחת העבודה שלי היא שמימוש מתאפשר מתוך הכרות.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            ככל שאתם מכירים משהו, כך מתרחבת האפשרות לשינוי.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            כולנו יודעים את עצמנו, אבל ידע לא מביא לשינוי.
                        </motion.p>
                        <motion.p
                            className="text-xl md:text-2xl font-light text-center text-[#C4A4A0] pt-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            הכרות כן.
                        </motion.p>
                        <motion.p
                            className="text-center text-xl md:text-3xl font-light mb-6 md:mb-10 text-[#C4A4A0]"
                            whileHover={{ scale: 1.02 }}
                        >
                            אני מזמינה אתכם באהבה לבוא לתכנית ליצירת זוגיות.
                        </motion.p>


                        <div className="py-6">
                            <motion.div
                                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C4A4A0]/20 to-[#A8B5A0]/20 flex items-center justify-center mx-auto mb-6"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <Heart className="w-8 h-8 text-[#C4A4A0]" />
                            </motion.div>
                        </div>

                        <motion.p
                            whileHover={{ scale: 1.02 }}
                            className="transition-all duration-300"
                        >
                            אני תמיד אומרת שזוגיות זה תחום שבחר בי, יותר מאשר אני בחרתי בו.
                        </motion.p>
                        <motion.p
                            className="text-2xl font-light text-[#C4A4A0]"
                            whileHover={{ scale: 1.02 }}
                        >
                            זה פשוט קרה!
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            מתחילת הדרך ובמרוצת השנים הגיעו אלי אנשים ועוד אנשים, כשכל מה שהם
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            רוצים לדבר עליו, זה על כמיהתם לקרבה ולקשר זוגי.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            הקשבתי לכמיהה הזאת, דרכם ודרך עצמי.
                        </motion.p>
                        <motion.p whileHover={{ scale: 1.02 }}>
                            למדתי אותה.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </section>


            {/* Program Content Section */}
            <section className="py-12 md:py-24 px-4 md:px-6 relative">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={stagger}
                >
                    <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl md:text-5xl font-light mb-4 md:mb-6 bg-gradient-to-l from-[#C4A4A0] to-[#A8B5A0] bg-clip-text text-transparent">
                            מה יתאפשר לכם בתכנית?
                        </h2>
                        <motion.div
                            className="w-16 h-[2px] bg-gradient-to-r from-[#C4A4A0] to-[#A8B5A0] mx-auto"
                            animate={{
                                scaleX: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-6">
                        {[
                            {
                                icon: Sparkles,
                                text: "תצרו בהירות והיכרות מעמיקה של מערכת היחסים שלכם עם אהבה וקשר זוגי.",
                                color: "from-[#C4A4A0] to-[#B39490]"
                            },
                            {
                                icon: Users,
                                text: "תראו מה מאפשר לכם פריצות דרך בחייכם ומה מעכב אתכם.",
                                color: "from-[#A8B5A0] to-[#98A590]"
                            },
                            {
                                icon: Heart,
                                text: "תכירו את מודל הרצון מול הפחד שפיתחתי (DVF), כמפתח ליצירת זוגיות.",
                                color: "from-[#C4A4A0] to-[#A8B5A0]"
                            },
                            {
                                icon: Clock,
                                text: "תזהו בסקרנות נטולת שיפוטים, היכן ההיסטוריה הזוגית שלכם מעצבת את מציאות חייכם היום.",
                                color: "from-[#B39490] to-[#A8B5A0]"
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="group"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Card className="flex items-start gap-3 md:gap-6 p-4 md:p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-l opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                            style={{
                                                background: `linear-gradient(to left, ${item.color})`
                                            }}
                                        />

                                        <motion.div
                                            className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg relative z-10`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                                        </motion.div>

                                        <p className="text-[#5A5550] leading-relaxed text-sm md:text-lg pt-1 md:pt-3 relative z-10">{item.text}</p>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </section>

            {/* Why Should You Come Section */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-transparent via-white/30 to-transparent relative overflow-hidden">
                <motion.div
                    className="absolute top-1/2 right-10 w-96 h-96 bg-[#C4A4A0]/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={stagger}
                >
                    <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl md:text-5xl font-light mb-4 md:mb-6 bg-gradient-to-l from-[#A8B5A0] to-[#C4A4A0] bg-clip-text text-transparent">
                            למה כדאי לבוא?
                        </h2>
                        <motion.div
                            className="w-16 h-[2px] bg-gradient-to-r from-[#A8B5A0] to-[#C4A4A0] mx-auto"
                            animate={{
                                scaleX: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-6">
                        {[
                            {
                                text: "כי 3 שעות בשבוע, של התבוננות ממוקדת בנושא הזוגי, יקרבו אתכם ליצירת זוגיות.",
                                color: "from-[#C4A4A0] to-[#B39490]"
                            },
                            {
                                text: "כי תיחשפו לזויות, אפשרויות ומודלים שיאפשרו הסתכלות חדשה.",
                                color: "from-[#A8B5A0] to-[#98A590]"
                            },
                            {
                                text: "כי האנרגיה שלכם תשתנה.",
                                color: "from-[#C4A4A0] to-[#A8B5A0]"
                            },
                            {
                                text: "כי מיציתם את האסטרטגיה שנקראת: להמשיך את אותו הדבר ולצפות לתוצאות שונות.",
                                color: "from-[#B39490] to-[#A8B5A0]"
                            },
                            {
                                text: "כי הכל ניתן לשינוי.",
                                color: "from-[#A8B5A0] to-[#C4A4A0]"
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="group"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card className="flex items-start gap-3 md:gap-6 p-4 md:p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-l opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(to left, ${item.color})`
                                        }}
                                    />

                                    <motion.div
                                        className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br ${item.color} flex-shrink-0 mt-1.5 md:mt-2 shadow-lg relative z-10`}
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <p className="text-[#5A5550] leading-relaxed text-sm md:text-lg relative z-10">{item.text}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* About the Mentor Section */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-white/30 via-white/50 to-transparent relative overflow-hidden">
                <motion.div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-[#C4A4A0]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={stagger}
                >
                    <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl md:text-5xl font-light mb-4 md:mb-6 bg-gradient-to-l from-[#C4A4A0] to-[#A8B5A0] bg-clip-text text-transparent">
                            על כוכי כהן הדר:
                        </h2>
                        <motion.div
                            className="w-16 h-[2px] bg-gradient-to-r from-[#A8B5A0] to-[#C4A4A0] mx-auto"
                            animate={{
                                scaleX: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                        {/* Credentials list - right side (RTL) */}
                        <div className="space-y-4 flex-1 order-2 md:order-1">
                            {[
                                {
                                    icon: Award,
                                    text: "מנחה, מנטורית ומאמנת בכירה לשיטת סאטיה מבית אימושיין.",
                                    color: "from-[#C4A4A0] to-[#A8B5A0]"
                                },
                                {
                                    icon: GraduationCap,
                                    text: "תואר ראשון במדעי המדינה מאונ' בר אילן.",
                                    color: "from-[#A8B5A0] to-[#B39490]"
                                },
                                {
                                    icon: BookOpen,
                                    text: "לימודי תואר שני בחוג לתורת הספרות הכללית באונ' תל אביב.",
                                    color: "from-[#B39490] to-[#C4A4A0]"
                                },
                                {
                                    icon: TrendingUp,
                                    text: "מובילה תהליכי טרנספורמציה והתפתחות למעלה מ-20 שנה.",
                                    color: "from-[#C4A4A0] to-[#B39490]"
                                },
                                {
                                    icon: Star,
                                    text: "כ-40,000 שעות אימון, חלק ניכר מהן בתחום זוגיות ומערכות יחסים.",
                                    color: "from-[#A8B5A0] to-[#98A590]"
                                },
                                {
                                    icon: Users,
                                    text: "מומחית לקשב עמוק ולשפת גוף.",
                                    color: "from-[#B39490] to-[#A8B5A0]"
                                },
                                {
                                    icon: Sparkles,
                                    text: "מפתחת מודל DVF לפריצות דרך.",
                                    color: "from-[#A8B5A0] to-[#C4A4A0]"
                                },
                            ].map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="group"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Card className="flex items-start gap-3 md:gap-4 p-3 md:p-5 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-l opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                                style={{
                                                    background: `linear-gradient(to left, ${item.color})`
                                                }}
                                            />

                                            <motion.div
                                                className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg relative z-10`}
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                                            </motion.div>

                                            <p className="text-[#5A5550] leading-relaxed text-sm md:text-base pt-1 relative z-10">{item.text}</p>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Image - left side */}
                        <div className="flex-shrink-0 mx-auto md:mx-0 order-1 md:order-2">
                            <div className="relative">
                                <div className="w-48 md:w-60 rounded-2xl overflow-hidden border-0">
                                    <div className="relative" style={{ mask: 'radial-gradient(ellipse at center, black 60%, transparent 85%)', WebkitMask: 'radial-gradient(ellipse at center, black 60%, transparent 85%)' }}>
                                        <img
                                            src="/Gemini_Generated_Image_84zm5584zm5584zm.png"
                                            alt="כוכי כהן הדר"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Final Message Section */}
            <section className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#A8B5A0]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="max-w-3xl mx-auto text-center relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={stagger}
                >
                    <motion.div
                        variants={fadeInUp}
                        className="space-y-4 md:space-y-6 p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm shadow-xl"
                    >
                        <motion.p
                            className="text-lg md:text-2xl text-[#5A5550] leading-relaxed"
                            whileHover={{ scale: 1.02 }}
                        >
                            בתפישת עולמי יצירת זוגיות איננה תעלומה.
                        </motion.p>
                        <motion.p
                            className="text-xl md:text-3xl text-[#C4A4A0] font-light"
                            whileHover={{ scale: 1.05 }}
                        >
                            אפשר להתקרב לזה.
                        </motion.p>
                        <motion.p
                            className="text-xl md:text-3xl text-[#A8B5A0] font-light"
                            whileHover={{ scale: 1.05 }}
                        >
                            אפשר ליצור.
                        </motion.p>
                        <motion.p
                            className="text-lg md:text-2xl text-[#C4A4A0] font-light pt-4 md:pt-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            ברוכים תהיו במסע הזה.
                        </motion.p>

                    </motion.div>
                </motion.div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-12 md:py-24 px-4 md:px-6 relative">
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C4A4A0]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="max-w-xl mx-auto relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={stagger}
                >
                    <motion.div variants={fadeInUp} className="text-center mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-light mb-6 md:mb-8 bg-gradient-to-l from-[#C4A4A0] to-[#A8B5A0] bg-clip-text text-transparent">
                            כוכי כהן הדר
                        </h2>
                        <motion.div
                            className="w-12 h-[2px] bg-gradient-to-r from-[#C4A4A0] to-[#A8B5A0] mx-auto"
                            animate={{
                                scaleX: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <Card className="p-6 md:p-12 bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C4A4A0] via-[#A8B5A0] to-[#C4A4A0]"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    backgroundSize: '200% auto',
                                }}
                            />

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <motion.div
                                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#A8B5A0]/20 to-[#C4A4A0]/20 flex items-center justify-center mx-auto mb-6"
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Heart className="w-10 h-10 text-[#A8B5A0]" />
                                    </motion.div>
                                    <h3 className="text-3xl font-light mb-4 text-[#C4A4A0]">תודה</h3>
                                    <p className="text-[#6B6560] text-lg">נחזור אליך בהקדם</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-7">
                                    <div className="space-y-3">
                                        <Label htmlFor="name" className="text-[#5A5550] font-normal text-base">שם</Label>
                                        <div className="relative group">
                                            <Input
                                                id="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="pr-10 md:pr-12 py-5 md:py-7 border-[#E5E0DB] focus:border-[#C4A4A0] focus:ring-[#C4A4A0]/20 rounded-xl md:rounded-2xl text-base md:text-lg transition-all duration-300 group-hover:border-[#C4A4A0]/50"
                                            />
                                            <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C4A4A0]/50 group-hover:text-[#C4A4A0] transition-colors duration-300" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="phone" className="text-[#5A5550] font-normal text-base">טלפון</Label>
                                        <div className="relative group">
                                            <Input
                                                id="phone"
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="pr-10 md:pr-12 py-5 md:py-7 border-[#E5E0DB] focus:border-[#C4A4A0] focus:ring-[#C4A4A0]/20 rounded-xl md:rounded-2xl text-base md:text-lg transition-all duration-300 group-hover:border-[#C4A4A0]/50"
                                                dir="ltr"
                                            />
                                            <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C4A4A0]/50 group-hover:text-[#C4A4A0] transition-colors duration-300" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="email" className="text-[#5A5550] font-normal text-base">אימייל</Label>
                                        <div className="relative group">
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="pr-10 md:pr-12 py-5 md:py-7 border-[#E5E0DB] focus:border-[#C4A4A0] focus:ring-[#C4A4A0]/20 rounded-xl md:rounded-2xl text-base md:text-lg transition-all duration-300 group-hover:border-[#C4A4A0]/50"
                                                dir="ltr"
                                            />
                                            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C4A4A0]/50 group-hover:text-[#C4A4A0] transition-colors duration-300" />
                                        </div>
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-l from-[#C4A4A0] to-[#A8B5A0] hover:from-[#B39490] hover:to-[#98A590] text-white py-5 md:py-7 text-base md:text-lg rounded-xl md:rounded-2xl shadow-xl shadow-[#C4A4A0]/30 transition-all duration-500 relative overflow-hidden group"
                                        >
                                            <motion.span
                                                className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"
                                                animate={{
                                                    x: isSubmitting ? 0 : [-200, 200],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: isSubmitting ? 0 : Infinity,
                                                    ease: "linear"
                                                }}
                                            />
                                            <span className="relative">{isSubmitting ? 'שולח...' : 'שלח'}</span>
                                        </Button>
                                    </motion.div>
                                </form>
                            )}
                        </Card>
                    </motion.div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-10 md:py-16 px-4 md:px-6 text-center relative">
                <motion.div
                    className="max-w-xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <motion.div
                        className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C4A4A0] to-transparent mx-auto mb-8"
                        animate={{
                            scaleX: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <p className="text-[#8A8580] text-sm">
                        © {new Date().getFullYear()}
                    </p>
                </motion.div>
            </footer>
        </div>
    );
}
