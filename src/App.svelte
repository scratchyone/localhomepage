<script>
  export let services;
</script>

<main>
  <h1 id="header">Home Network Guide</h1>
  <div id="holder">
    {#each services as service}
      <div class="card">
        <div class="card_image">
          <img alt={service.name + ' Logo'} src={service.image} />
        </div>
        <div class="card_body">
          <div>
            <h1 class="card_title">{service.name}</h1>
            <h3 class="card_text">{service.description}</h3>
          </div>
          <div>
            <div class="card_hostname">
              <a
                target="_blank"
                href={'http://' + (service.hostname || service.ip)}
                >{service.hostname || service.ip}</a
              >
            </div>
            <div class="card_ip">
              {#if service.hostname}
                <a target="_blank" href={'http://' + service.ip}>{service.ip}</a
                >
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    margin: 0;
    padding: 20px;
    font-family: Open Sans;
    color: #333333;
  }
  #header {
    font-weight: 800;
    font-size: 65px;
    margin: 0;
    margin-bottom: 20px;
  }
  @media (max-width: 1000px) {
    #header {
      font-size: 40px;
    }
  }

  #holder {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 1000px) {
    #holder {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
  .card_image > img {
    width: 80px;
    padding: 30px;
  }
  .card_image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    display: flex;
    flex-direction: row;
    background: #f9f9f9;
    box-shadow: 12.7879px 15.3775px 80px rgba(0, 0, 0, 0.07),
      8.28847px 9.96693px 46.8519px rgba(0, 0, 0, 0.0531481),
      4.92572px 5.9232px 25.4815px rgba(0, 0, 0, 0.0425185),
      2.55759px 3.07551px 13px rgba(0, 0, 0, 0.035),
      1.04198px 1.25299px 6.51852px rgba(0, 0, 0, 0.0274815),
      0.236813px 0.284769px 3.14815px rgba(0, 0, 0, 0.0168519);
    border-radius: 16px;
  }
  .card_title {
    font-weight: 800;
    font-size: 55px;
    margin: 0px;
  }
  @media (max-width: 1000px) {
    .card_title {
      font-size: 35px;
    }
  }
  .card_text {
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    margin-top: -5px;
    color: #333333;
    word-break: break-word;
  }
  @media (max-width: 1000px) {
    .card_text {
      font-size: 20px;
    }
  }
  .card_body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 20px;
    word-break: break-word;
  }
  .card_ip {
    padding-bottom: 10px;
  }
  .card_ip > a {
    padding-top: 0;
    font-weight: 700;
    font-size: 15px;
    color: #a5a5a5;
    text-decoration: none;
  }
  .card_hostname > a {
    font-weight: bold;
    font-size: 25px;
    color: #0e9ac7;
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    .card_hostname > a {
      font-size: 20px;
    }
    .card_ip > a {
    }
  }
</style>
