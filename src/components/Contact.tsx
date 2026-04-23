import { contactIcons } from "../shared/contactIcons";
import { contactLinks, profile } from "../shared/utils";

function Contact() {
    return (
        <section
            id="contact"
            className="surface-section relative overflow-hidden rounded-t-3xl !pb-20 !pt-8 min-[700px]:!pb-24 min-[700px]:!pt-10"
        >
            <div className="absolute inset-x-0 bottom-0 h-20 bg-[#f8bf3c] [clip-path:path('M0,42_C120,12_210,78_328,42_C458,-2_565,57_720,36_C842,21_972,-8_1120,22_L1120,100_L0,100_Z')] min-[700px]:h-28" />

            <div className="relative z-10 mx-auto grid max-w-md gap-6 text-center">
                <div className="grid gap-3">
                    <h2 className="section-title text-[clamp(2rem,8vw,3rem)] leading-[1.05]">
                        Contact
                    </h2>
                    <p className="section-copy text-[0.84rem]">
                        If you like my profile and want to talk, leave me an email below or use the links underneath.
                    </p>
                </div>

                <form className="grid gap-3 text-left" action={contactLinks[0].href} method="get">
                    <input className="form-field" name="subject" type="text" placeholder="Name" aria-label="Name" />
                    <input className="form-field" name="email" type="email" placeholder="Email" aria-label="Email" />
                    <textarea className="form-field min-h-28 resize-y" name="body" placeholder="Message" aria-label="Message" />
                    <div className="flex justify-end">
                        <button className="button-primary" type="submit">
                            Send
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-center gap-2.5">
                    {contactLinks.map((link) => (
                        <a
                            className="group grid justify-items-center gap-1.5 text-center no-underline"
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                            aria-label={link.label}
                        >
                            <div className="icon-button group-hover:scale-[1.04]">
                                {contactIcons[link.label as keyof typeof contactIcons]}
                            </div>
                        </a>
                    ))}
                </div>

                <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[rgba(30,29,27,0.34)]">
                    {profile.name}
                </p>
            </div>
        </section>
    );
}

export default Contact;