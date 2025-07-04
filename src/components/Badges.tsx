import Image from 'next/image';

const Badges = () => {
    return (
        <div className="badges">
            <a className="badge-item" href="https://cadence.moe/blog/2024-10-05-created-by-a-human-badges">
                <Image
                    alt="created-by-human"
                    loading="lazy"
                    width="88"
                    height="31"
                    decoding="async"
                    data-nimg="1"
                    src="/badges/created-by-human.png" />
            </a>
            <a className="badge-item" href="https://fedi.tips/">
                <Image
                    alt="fediverse"
                    loading="lazy"
                    width="88"
                    height="31"
                    decoding="async"
                    data-nimg="1"
                    src="/badges/fediverse.png" />
            </a>
            <a className="badge-item">
                <Image
                    alt="1080p"
                    loading="lazy"
                    width="88"
                    height="31"
                    decoding="async"
                    data-nimg="1"
                    src="/badges/1080p.gif" />
            </a>
            <a className="badge-item">
                <Image
                    alt="bu12"
                    loading="lazy"
                    width="88"
                    height="31"
                    decoding="async"
                    data-nimg="1"
                    src="/badges/bu12.gif" />
            </a>
            <a className="badge-item" href="https://code.visualstudio.com/">
                <Image
                    alt="vscode"
                    loading="lazy"
                    width="88"
                    height="31"
                    decoding="async"
                    data-nimg="1"
                    src="/badges/vscode.png" />
            </a>
            <a className="badge-item" href="https://wttr.in/komsomolsk-on-amur">
                <Image
                    alt="weather"
                    loading="lazy"
                    width="100"
                    height="31"
                    decoding="async"
                    data-nimg="1"
                    src="https://wttr.in/komsomolsk-on-amur_0pq.png" />
            </a>
        </div>
    );
};

export default Badges;
