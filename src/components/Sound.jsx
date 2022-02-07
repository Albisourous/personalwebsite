import Sound from "react-sound";
import BGM from "../sounds/BGM.mp3"

const PlaySound = () => {
    return (
        <div>
            <Sound
                url={BGM}
                playStatus={Sound.status.PLAYING}
                playFromPosition={0}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            >
            </Sound>
        </div>
    );
};

export default PlaySound;