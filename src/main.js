import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    services: [
      {
        name: 'PiHole',
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Pi-hole_vector_logo.svg/1200px-Pi-hole_vector_logo.svg.png',
        description: 'PiHole is a DNS ad blocker.',
        ip: '192.168.2.111',
      },
      {
        name: 'VMware',
        image: 'https://www.drupal.org/files/project-images/vmware.png',
        description:
          'VMware is a virtualization tool powering the downstairs server.',
        ip: '192.168.2.168',
        hostname: 'vmware.local',
      },
      {
        name: 'Jellyfin',
        image:
          'https://features.jellyfin.org/images/logos/a7Lx9nYDzWuDR94Az8Yum7neWMvNMndkm9qr4QVtmjaMrOHDLisS5K7LJctTRzK9-icon-transparent.png?size=200',
        description: 'Jellyfin is a media server for movies and TV.',
        ip: '192.168.2.112:8096',
      },
      {
        name: 'Plex',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/f/f0/Plex_vector_logo.svg',
        description: 'Plex is an alternative media server for movies and TV.',
        ip: '192.168.2.112:32400',
      },

      {
        name: 'Home Assistant',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Home_Assistant_Logo.svg/1200px-Home_Assistant_Logo.svg.png',
        description: 'Home Assistant is a home automation platform.',
        ip: 'homeassistant.local:8123',
      },
      {
        name: 'Sonarr',
        image:
          'https://developer.asustor.com/uploadIcons/0020_23588_1465489647_0020_999_1439891916_0020_17730_1400232290_nzbDrone_icon_256x256.png',
        description: 'Sonarr is an automatic download tool for TV shows.',
        ip: '192.168.2.112:8989',
      },
      {
        name: 'Radarr',
        image: 'https://cdn.rawgit.com/Radarr/Radarr/develop/Logo/256.png',
        description: 'Radarr is an automatic download tool for movies.',
        ip: '192.168.2.112:7878',
      },
      {
        name: 'Prowlarr',
        image:
          'https://raw.githubusercontent.com/linuxserver/docker-templates/master/linuxserver.io/img/prowlarr-banner.png',
        description: 'Prowlarr is an indexer for Radarr and Sonarr.',
        ip: '192.168.2.112:9696',
      },
      {
        name: 'qBittorrent',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/New_qBittorrent_Logo.svg/1200px-New_qBittorrent_Logo.svg.png',
        description: 'qBittorrent is a torrent download client.',
        ip: '192.168.2.112:8080',
      },
      {
        name: 'WireGuard',
        image:
          'https://camo.githubusercontent.com/33116b1a48fc77cac43a0464c33d6f427d0655c9d0e860b1e43e41adeaa83c7b/68747470733a2f2f692e696d6775722e636f6d2f704341476a69612e706e67',
        description: 'WireGuard is a fast and efficient VPN server.',
        ip: '192.168.2.114',
        hostname: 'wireguard.local',
      },
      {
        name: 'Tdarr',
        image: 'https://tdarr.io/static/media/logo3.02a3f4a3.png',
        description: 'Tdarr is a distributed media transcoding tool.',
        ip: '192.168.2.112:8265',
      },
      {
        name: 'Grafana',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/640px-Grafana_logo.svg.png',
        description: 'Grafana is a time-series dashboard.',
        ip: '192.168.2.112:3000',
      },
      {
        name: 'HandBrake',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d9/HandBrake_Icon.png',
        description: 'HandBrake is a media transcoding tool.',
        ip: '192.168.2.112:5800',
      },
      {
        name: 'Network Guide',
        image:
          'https://www.logolynx.com/images/logolynx/df/dfc95540c225d6841233d7f74c9a2a11.png',
        description: 'A guide to all devices and services on our home network.',
        ip: '192.168.2.113',
        hostname: 'localhomepage.local',
      },
    ],
  },
});

export default app;
