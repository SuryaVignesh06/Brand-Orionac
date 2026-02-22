export default function VideoSection() {
    return (
        <section className="section--padding w-full">
            <div className="w-full">
                <video
                    className="w-full h-auto object-cover"
                    autoPlay loop muted playsInline
                    src="https://cdn.sanity.io/files/leima53t/production/50a39a145d2758f35d2267797dbea1664b2b8e72.mp4"
                />
            </div>
        </section>
    );
}
