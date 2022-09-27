import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseServerService } from '../../../backend/resources/database-server/database-server.service';
import { Toastr, TOASTR_TOKEN } from "src/app/toastr.service";
import { DatabaseServer } from '../../../models/database-server-model';

@Component({
  selector: 'app-create-database-server-v1',
  templateUrl: './create-database-server-v1.component.html',
  styleUrls: ['./create-database-server-v1.component.scss']
})
export class CreateDatabaseServerV1Component implements OnInit {

  dbServer!: DatabaseServer;
  dbServerId: any;
  mode?: string
  constructor(private router: Router, private dbService: DatabaseServerService, private activatedRoute: ActivatedRoute, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
    this.mode = '';
    this.dbServer = {};
  }



  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.dbServerId = params["id"]
      })
    if (this.dbServerId) {
      this.mode = 'edit'
      this.dbService.get(this.dbServerId)
        .subscribe(res => {
          if (res) {
            this.dbServer.name = res.name,
              this.dbServer.connectionString = res.connectionString
          }
        })
    }
    else {
      this.mode = 'create'
    }
  }


  saveDbServer() {
    if (this.mode === 'create') {
      this.dbService.create(this.dbServer)
        .subscribe(res => {
          this.toastr.success("Database saved")
          window.history.back()
        })
    }
    else if (this.mode === 'edit') {
      this.dbService.update(this.dbServerId, this.dbServer)
        .subscribe(res => {
          window.history.back();
        })
    }
  }


}
