export default function IconGrid() {
    return (
        <section className="section--padding px-[var(--home-padding)] bg-white w-full">
            <div className="flex flex-row justify-between items-center w-full gap-8">
                <div className="flex-1 flex justify-center items-center">
                    <img src="https://cdn.sanity.io/images/leima53t/production/9ba5cef57c0fbfe44d8b224887b0781e358d2776-1528x1527.png" alt="Icon 1" className="w-full max-w-[200px] h-auto object-contain transition-transform hover:scale-105 duration-500" />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img src="https://cdn.sanity.io/images/leima53t/production/aa7f247d748c61edc9e5f14101ce35eb605dee5c-1218x1218.png" alt="Icon 2" className="w-full max-w-[200px] h-auto object-contain transition-transform hover:scale-105 duration-500" />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img src="https://cdn.sanity.io/images/leima53t/production/a3f28abfd853d96ec417bf7354c13871f65ac87f-1500x1500.png" alt="Icon 3" className="w-full max-w-[200px] h-auto object-contain transition-transform hover:scale-105 duration-500" />
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img src="https://cdn.sanity.io/images/leima53t/production/0b174f0a2b65ef20a8ba6577a6062f2fd10aaec2-914x914.png" alt="Icon 4" className="w-full max-w-[200px] h-auto object-contain transition-transform hover:scale-105 duration-500" />
                </div>
            </div>
        </section>
    );
}
