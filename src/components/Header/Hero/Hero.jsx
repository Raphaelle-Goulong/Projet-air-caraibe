import './Hero.css'

function Hero() {
    return (
        <section
            className="relative h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/raph22/image/upload/v1744910207/hugh-whyte-SBOHLtENzEY-unsplash_vf0sdd.jpg')"
            }}>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-4xl md:text-6xl font-bold text-center">
                    Réservez votre prochain voyage
                </h2>
            </div>
        </section>
    )
}

export default Hero
