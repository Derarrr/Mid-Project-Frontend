export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Derald Tjiwili</span>{" "}
          </h1>
          <p className="hero--section-description">
          Halo, saya Derald. Seorang mahasiswa yang kebetulan berkuliah jurusan di fakultas Ilmu Komputer Universitas Klabat. Sedang sibuk menikmati hidup dengan cara menjalaninya. Hobi berolahraga. Biasa diucapkan selamat pada tanggal 23 Februari.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="https://scontent.fmdc3-1.fna.fbcdn.net/v/t39.30808-6/243996545_1212044562598701_5411462884892184162_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH3aZSuTJ1_2nsvud6aXvnQDgLcksT5eysOAtySxPl7K8ZZNlVmrxv6wBcxUzQXYA1B5LqL6t8B0A91rTohc8v5&_nc_ohc=ZgYTfs-eJlgAX9x-mia&_nc_ht=scontent.fmdc3-1.fna&oh=00_AfDGQxQ1h_FcnmHhfoO5pKvsuzMS0F29A6KnvRG7uREccA&oe=65584FC6" alt="Hero Section" />
      </div>
    </section>
  );
}
