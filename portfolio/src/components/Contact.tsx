
import { Mail, Github, Linkedin, FileText, Send, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kam2711@outlook.com',
      href: 'mailto:kam2711@outlook.com',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/50',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kambains226',
      href: 'https://github.com/kambains226',
      color: 'text-slate-400',
      bgColor: 'bg-slate-500/10',
      borderColor: 'border-slate-500/50',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kameron-bains',
      href: 'https://www.linkedin.com/in/kameron-bains-b752b7226/',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/50',
    },
    {
      icon: FileText,
      label: 'Resume/CV',
      value: 'Download CV',
      href: '../../cv/Kameron_Bains CV.pdf',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/50',
    },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="font-mono text-emerald-400 mb-2 flex items-center justify-center gap-2">
            <span className="text-slate-500">//</span> 04. Contact
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="text-emerald-400">&lt;</span>
            Get In Touch
            <span className="text-emerald-400">/&gt;</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Let's Connect</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Whether you have a question, want to collaborate on a project, or just want to say hi,
                feel free to reach out. I'll do my best to get back to you as soon as possible!
              </p>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Location</div>
                  <div>Royal Leamington Spa, UK</div>
                  <div className="text-sm">Open to remote opportunities</div>
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map(({ icon: Icon, label, value, href, color, bgColor, borderColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 bg-slate-900/50 border ${borderColor} rounded-lg p-4 hover:scale-105 transition-all hover:shadow-lg`}
                >
                  <div className={`${bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">{label}</div>
                    <div className={`font-medium ${color} group-hover:underline`}>{value}</div>
                  </div>
                  <Send className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Code block visualization */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 font-mono text-sm text-slate-500">contact.ts</span>
              </div>

              <div className="font-mono text-sm space-y-2">
                <div className="text-slate-500">
                  <span className="text-cyan-400">const</span>{' '}
                  <span className="text-white">contact</span> ={' '}
                  <span className="text-emerald-400">{'{'}</span>
                </div>
                <div className="ml-4 text-slate-300">
                  <span className="text-purple-400">name</span>:{' '}
                  <span className="text-orange-400">'Kameron Bains'</span>,
                </div>
                <div className="ml-4 text-slate-300">
                  <span className="text-purple-400">role</span>:{' '}
                  <span className="text-orange-400">'Software Engineer'</span>,
                </div>
                <div className="ml-4 text-slate-300">
                  <span className="text-purple-400">status</span>:{' '}
                  <span className="text-orange-400">'Available for opportunities'</span>,
                </div>
                <div className="ml-4 text-slate-300">
                  <span className="text-purple-400">email</span>:{' '}
                  <span className="text-orange-400">'kam2711@outlook.com'</span>,
                </div>
                <div className="ml-4 text-slate-300">
                  <span className="text-purple-400">interests</span>: [
                </div>
                <div className="ml-8 text-orange-400">
                  <div>'Full-Stack Development',</div>
                  <div>'Open Source',</div>
                  <div>'Cloud Architecture',</div>
                  <div>'Team Collaboration'</div>
                </div>
                <div className="ml-4 text-slate-300">],</div>
                <div className="ml-4 text-slate-300">
                  <span className="text-purple-400">hireable</span>:{' '}
                  <span className="text-cyan-400">true</span>,
                </div>
                <div className="text-emerald-400">{'}'}</div>
                <div className="mt-4 text-slate-500">
                  <span className="text-slate-500">// Feel free to reach out!</span>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">{'<24h'}</div>
                <div className="text-sm text-slate-400">Response Time</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Availability</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-2">Ready to Start a Project?</h4>
              <p className="text-slate-300 mb-4">
                Let's build something amazing together
              </p>
              <a
                href="mailto:kam2711@outlook.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
