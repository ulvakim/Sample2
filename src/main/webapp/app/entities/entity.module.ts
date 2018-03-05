import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Sample2RegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { Sample2CountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { Sample2LocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { Sample2DepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { Sample2TaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { Sample2EmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { Sample2JobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { Sample2JobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Sample2RegionMySuffixModule,
        Sample2CountryMySuffixModule,
        Sample2LocationMySuffixModule,
        Sample2DepartmentMySuffixModule,
        Sample2TaskMySuffixModule,
        Sample2EmployeeMySuffixModule,
        Sample2JobMySuffixModule,
        Sample2JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Sample2EntityModule {}
