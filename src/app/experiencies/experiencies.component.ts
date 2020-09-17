import { Experience } from './experience.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencies',
  templateUrl: './experiencies.component.html',
  styleUrls: ['./experiencies.component.css']
})
export class ExperienciesComponent implements OnInit {

  experiences: Experience[] = [
    {
      start: 2020,
      end: 2020,
      position: 'Freelance Fullstack Web Developer',
      company: 'Emblic Technologies',
      location: 'Port Harcourt, Rivers',
      activities: [
        'Built the myemblic hotel management SaaS backend',
        'Built the administrator frontend',
        'Built the Landing page',
        'Built the Hotel ERP',
        'Implemented CI/CD using Gitlab CI and codeigniter migrations',
        'Hosted Hotel ERP solution on cpanel using Gitlab CI/CD'
      ]
    },
    {
      start: 2019,
      end: 2020,
      position: 'Corp Member (Computer Science Teacher)',
      company: 'National Youth Service Corp',
      location: 'Dunukofia, Anambra',
      activities: [
        'Taught JSS3 Class about Microsoft Office Packages',
        'Taught JSS3 Class about BASIC programming Language and computer arithmetics',
        'Taught JSS2 Class about basic computer components, types and ethics',
        'Taught JSS2 Class about Application and system software packages',
        'Taught JSS2 Class about Number systems and number bases conversion'
      ]
    },
    {
      start: 2018,
      end: 2019,
      position: 'Senior Software Developer',
      company: 'Bezop Blockchain Inc.',
      location: 'Awka, Anambra',
      activities: [
        'Built Crypto exchange SaaS Operator and Administrator Frontend',
        'Built Administrator Backend',
        'Deployment using Cloud Build, Cloud Run and Docker',
        'Deployed Frontend, backend and databases to GCP compute instances',
        'Configured and Managed administrator Databases and Compute instances using Cloud DNS and Networking',
        'Built and deployed Zero Knowledge wallets for 50 Crypto currencies and other Digital assets such as ERC-20 tokens and OMNI tokens',
        'Implemented Zero Knowledge wallet backup and recovery',
        'Built email broadcast service using AWS SES'
      ]
    },
    {
      start: 2017,
      end: 2018,
      position: 'Backend Web Developer',
      company: 'Nugi Technologies',
      location: 'Calabar, Cross river',
      activities: [
        `Built and deployed Tailorgang Tailor's dashboard`,
        'Built and deployed Tailorgang API',
        'Implemented Micro service Architecture using the Axon socket package',
        'Implemented tailor search service using elastic search'
      ]
    },
    {
      start: 2017,
      end: 2017,
      position: 'Intern Fullstack Developer',
      company: 'Nugi Technologies',
      location: 'Calabar, Cross river',
      activities: [
        'Renovated the nugitech.com website',
        `Built and deployed initial release of Tailorgang Tailor's dashboard`
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}