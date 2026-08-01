
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SliderComponent } from './pages/slider/slider.component';
import { SealantadhesiveComponent } from './pages/sealantadhesive/sealantadhesive.component';
import { WorkshopgarageComponent } from './pages/workshopgarage/workshopgarage.component';
import { LoginComponent } from './pages/pages/login/login.component';
import { TrackorderComponent } from './pages/pages/trackorder/trackorder.component';
import { DeliverypolicyComponent } from './pages/pages/deliverypolicy/deliverypolicy.component';
import { WarrantyandreturnsComponent } from './pages/pages/warrantyandreturns/warrantyandreturns.component';
import { FormsModule } from '@angular/forms';
import { TermsandconditionsComponent } from './pages/pages/termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './pages/pages/privacypolicy/privacypolicy.component';
import { FaqComponent } from './pages/pages/faq/faq.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { SearchResultsComponent } from './pages/search/search-results/search-results.component';
import { ChemicalwearsComponent } from './pages/ppe/bycategory/clothing/chemicalwears/chemicalwears.component';
import { BagclosermachinesComponent } from './pages/powertools/bycategories/bagclosermachines/bagclosermachines.component';
import { WheellocksComponent } from './pages/workshopgarage/wheelserviceequipment/wheellocks/wheellocks.component';
import { PuttyknifeComponent } from './pages/handtools/category/puttyknife/puttyknife.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopcategoriesComponent } from './pages/shops/shopcategories/shopcategories.component';
import { ProductdetailsComponent } from './pages/shops/productdetails/productdetails.component';
import { HandglovesComponent } from './pages/ppe/bycategory/handgloves/handgloves.component';
import { SafetybootsComponent } from './pages/ppe/bycategory/safetyboots/safetyboots.component';
import { SafetygooglesComponent } from './pages/ppe/bycategory/safetygoogles/safetygoogles.component';
import { CombokitsComponent } from './pages/powertools/bycategories/combokits/combokits.component';
import { SafetyharnessandlanyardsComponent } from './pages/ppe/bycategory/safetyharnessandlanyards/safetyharnessandlanyards.component';
import { BumpcapsComponent } from './pages/ppe/bycategory/headprotections/bumpcaps/bumpcaps.component';
import { FlashlightsComponent } from './pages/ppe/bycategory/flashlights/flashlights.component';
import { FallarrestorsComponent } from './pages/ppe/bycategory/fallarrestors/fallarrestors.component';
import { SafetyrainwearsComponent } from './pages/ppe/bycategory/safetyrainwears/safetyrainwears.component';
import { GasdetectorsComponent } from './pages/ppe/bycategory/gasdetectors/gasdetectors.component';
import { EmergencyeyewashComponent } from './pages/ppe/bycategory/emergencyeyewash/emergencyeyewash.component';
import { SecuritygearsComponent } from './pages/ppe/bycategory/securityandsurveillance/securitygears/securitygears.component';
import { StanchionsComponent } from './pages/ppe/bycategory/securityandsurveillance/stanchions/stanchions.component';
import { SafetyshoesComponent } from './pages/ppe/bycategory/safetyshoes/safetyshoes.component';
import { DisposablesComponent } from './pages/ppe/bycategory/clothing/disposables/disposables.component';
import { CoverallsComponent } from './pages/ppe/bycategory/clothing/coveralls/coveralls.component';
import { ReflectivevestsComponent } from './pages/ppe/bycategory/clothing/reflectivevests/reflectivevests.component';
import { LabcoatsComponent } from './pages/ppe/bycategory/clothing/labcoats/labcoats.component';
import { FireresistantwearsComponent } from './pages/ppe/bycategory/clothing/fireresistantwears/fireresistantwears.component';
import { ElectricpressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/electricpressurewashers/electricpressurewashers.component';
import { HeatgunsComponent } from './pages/powertools/bycategories/heatguns/heatguns.component';
import { HeadprotectionsComponent } from './pages/ppe/bycategory/headprotections/headprotections.component';
import { FaceshieldsComponent } from './pages/ppe/bycategory/headprotections/faceshields/faceshields.component';
import { SpillkitsComponent } from './pages/ppe/bycategory/spillkits/spillkits.component';
import { FirstaidsComponent } from './pages/ppe/bycategory/firstaids/firstaids.component';
import { NosemasksComponent } from './pages/ppe/bycategory/respiratoryandhearing/nosemasks/nosemasks.component';
import { EarmuffsComponent } from './pages/ppe/bycategory/respiratoryandhearing/earmuffs/earmuffs.component';
import { EarplugsComponent } from './pages/ppe/bycategory/respiratoryandhearing/earplugs/earplugs.component';
import { CuttingmachinesComponent } from './pages/powertools/bycategories/cuttingmachines/cuttingmachines.component';
import { MixersComponent } from './pages/powertools/bycategories/mixers/mixers.component';
import { PolishersComponent } from './pages/powertools/bycategories/polishers/polishers.component';
import { SpraygunsComponent } from './pages/powertools/bycategories/sprayguns/sprayguns.component';
import { NailersComponent } from './pages/powertools/bycategories/nailers/nailers.component';
import { GeneralguntoolsComponent } from './pages/powertools/bycategories/generalguntools/generalguntools.component';
import { ImpulsesealersComponent } from './pages/powertools/bycategories/impulsesealers/impulsesealers.component';
import { TrimmersComponent } from './pages/powertools/bycategories/trimmers/trimmers.component';
import { PlanersComponent } from './pages/powertools/bycategories/planers/planers.component';
import { PprandthreadingmachinesComponent } from './pages/powertools/bycategories/pprandthreadingmachines/pprandthreadingmachines.component';
import { RoutersComponent } from './pages/powertools/bycategories/routers/routers.component';
import { SandersComponent } from './pages/powertools/bycategories/sanders/sanders.component';
import { EdgebandingmachinesComponent } from './pages/powertools/bycategories/edgebandingmachines/edgebandingmachines.component';
import { WallchasersComponent } from './pages/powertools/bycategories/wallchasers/wallchasers.component';
import { CordeddrillsComponent } from './pages/powertools/bycategories/drills/cordeddrills/cordeddrills.component';
import { CordlessdrillsanddriversComponent } from './pages/powertools/bycategories/drills/cordlessdrillsanddrivers/cordlessdrillsanddrivers.component';
import { CoredrillsComponent } from './pages/powertools/bycategories/drills/coredrills/coredrills.component';
import { RotaryhammerdrillsComponent } from './pages/powertools/bycategories/drills/rotaryhammerdrills/rotaryhammerdrills.component';
import { MagneticdrillsComponent } from './pages/powertools/bycategories/drills/magneticdrills/magneticdrills.component';
import { DrillpressesComponent } from './pages/powertools/bycategories/drills/drillpresses/drillpresses.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { ShoppressComponent } from './pages/powertools/bycategories/shoppress/shoppress.component';
import { FueltransferpumpsComponent } from './pages/pumpingmachines/fueltransferpumps/fueltransferpumps.component';
import { SiliconesealantsComponent } from './pages/sealantadhesive/siliconesealants/siliconesealants.component';
import { PufoamsealantsComponent } from './pages/sealantadhesive/pufoamsealants/pufoamsealants.component';
import { EpoxyadhesivesComponent } from './pages/sealantadhesive/epoxyadhesives/epoxyadhesives.component';
import { ConstructionadhesivesComponent } from './pages/sealantadhesive/constructionadhesives/constructionadhesives.component';
import { GluesComponent } from './pages/sealantadhesive/glues/glues.component';
import { ContactadhesivesComponent } from './pages/sealantadhesive/contactadhesives/contactadhesives.component';
import { WaterproofsealantsComponent } from './pages/sealantadhesive/waterproofsealants/waterproofsealants.component';
import { LeakfillersComponent } from './pages/sealantadhesive/leakfillers/leakfillers.component';
import { GumsComponent } from './pages/sealantadhesive/gums/gums.component';
import { GluegunsComponent } from './pages/powertools/bycategories/glueguns/glueguns.component';
import { FireblanketsComponent } from './pages/fireandtrafficsafety/firesafety/fireblankets/fireblankets.component';
import { FireextinguishersComponent } from './pages/fireandtrafficsafety/firesafety/fireextinguishers/fireextinguishers.component';
import { SmokeFirealarmsComponent } from './pages/fireandtrafficsafety/firesafety/smoke-firealarms/smoke-firealarms.component';
import { FirehosecabinetComponent } from './pages/fireandtrafficsafety/firesafety/firehosecabinet/firehosecabinet.component';
import { FirehoseComponent } from './pages/fireandtrafficsafety/firesafety/firehose/firehose.component';
import { TrafficconesComponent } from './pages/fireandtrafficsafety/trafficsafety/trafficcones/trafficcones.component';
import { CautiontapesComponent } from './pages/fireandtrafficsafety/trafficsafety/cautiontapes/cautiontapes.component';
import { ConvexmirrorsComponent } from './pages/fireandtrafficsafety/trafficsafety/convexmirrors/convexmirrors.component';
import { InspectionmirrorsComponent } from './pages/fireandtrafficsafety/trafficsafety/inspectionmirrors/inspectionmirrors.component';
import { MetaldetectorsComponent } from './pages/fireandtrafficsafety/trafficsafety/metaldetectors/metaldetectors.component';
import { ReflectorsComponent } from './pages/fireandtrafficsafety/trafficsafety/reflectors/reflectors.component';
import { RoadbarriersComponent } from './pages/fireandtrafficsafety/trafficsafety/roadbarriers/roadbarriers.component';
import { SafetyvestsComponent } from './pages/fireandtrafficsafety/trafficsafety/safetyvests/safetyvests.component';
import { SpeedbumpsComponent } from './pages/fireandtrafficsafety/trafficsafety/speedbumps/speedbumps.component';
import { WarningsignsComponent } from './pages/fireandtrafficsafety/trafficsafety/warningsigns/warningsigns.component';
import { WheelchocksComponent } from './pages/fireandtrafficsafety/trafficsafety/wheelchocks/wheelchocks.component';
import { AircompressorsComponent } from './pages/workshopgarage/aircompressors/aircompressors.component';
import { CarcreepersComponent } from './pages/workshopgarage/carcreepers/carcreepers.component';
import { LaddersComponent } from './pages/workshopgarage/ladders/ladders.component';
import { ChainblocksandhoistsComponent } from './pages/workshopgarage/lifting/chainblocksandhoists/chainblocksandhoists.component';
import { DrumhandlingequimentsComponent } from './pages/workshopgarage/lifting/drumhandlingequiments/drumhandlingequiments.component';
import { EnginecranesComponent } from './pages/workshopgarage/lifting/enginecranes/enginecranes.component';
import { JackandliftsComponent } from './pages/workshopgarage/lifting/jackandlifts/jackandlifts.component';
import { LiftingbeltsComponent } from './pages/workshopgarage/lifting/liftingbelts/liftingbelts.component';
import { PalletetrucksComponent } from './pages/workshopgarage/lifting/palletetrucks/palletetrucks.component';
import { PalletstackersComponent } from './pages/workshopgarage/lifting/palletstackers/palletstackers.component';
import { TrolleysComponent } from './pages/workshopgarage/lifting/trolleys/trolleys.component';
import { PowerextensionandreelsComponent } from './pages/workshopgarage/powerextensionandreels/powerextensionandreels.component';
import { RotarypumpsComponent } from './pages/workshopgarage/rotarypumps/rotarypumps.component';
import { TestingbucketsComponent } from './pages/workshopgarage/testingbuckets/testingbuckets.component';
import { TirechangesComponent } from './pages/workshopgarage/wheelserviceequipment/tirechanges/tirechanges.component';
import { WheelalignmentguagesComponent } from './pages/workshopgarage/wheelserviceequipment/wheelalignmentguages/wheelalignmentguages.component';
import { WheelbalancersComponent } from './pages/workshopgarage/wheelserviceequipment/wheelbalancers/wheelbalancers.component';
import { FoldingladdersComponent } from './pages/workshopgarage/ladders/foldingladders/foldingladders.component';
import { ExtensionladdersComponent } from './pages/workshopgarage/ladders/extensionladders/extensionladders.component';
import { StepladdersComponent } from './pages/workshopgarage/ladders/stepladders/stepladders.component';
import { WorkbenchesComponent } from './pages/workshopgarage/workbenches/workbenches.component';
import { ToolssetComponent } from './pages/workshopgarage/toolsset/toolsset.component';
import { ToolscabinetComponent } from './pages/workshopgarage/toolscabinet/toolscabinet.component';
import { GreasebucketsComponent } from './pages/workshopgarage/greasebuckets/greasebuckets.component';
import { AutoaircompressorsComponent } from './pages/electricalequipments/autoaircompressors/autoaircompressors.component';
import { BatteriesComponent } from './pages/electricalequipments/batteries/batteries.component';
import { BatterychargersComponent } from './pages/electricalequipments/batterychargers/batterychargers.component';
import { CablewiresandboostersComponent } from './pages/electricalequipments/cablewiresandboosters/cablewiresandboosters.component';
import { ExtensioncablewiresComponent } from './pages/electricalequipments/extensioncablewires/extensioncablewires.component';
import { GeneratorsComponent } from './pages/electricalequipments/generators/generators.component';
import { DesielgeneratorsComponent } from './pages/electricalequipments/generators/desielgenerators/desielgenerators.component';
import { InvertergeneratorsComponent } from './pages/electricalequipments/generators/invertergenerators/invertergenerators.component';
import { PetrolgeneratorsComponent } from './pages/electricalequipments/generators/petrolgenerators/petrolgenerators.component';
import { PlasmacuttersComponent } from './pages/electricalequipments/plasmacutters/plasmacutters.component';
import { WeldingmachinesComponent } from './pages/electricalequipments/weldingmachines/weldingmachines.component';
import { ArcweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/arcweldingmachines/arcweldingmachines.component';
import { MmaweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/mmaweldingmachines/mmaweldingmachines.component';
import { TigweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/tigweldingmachines/tigweldingmachines.component';
import { WeldingaccessoriesComponent } from './pages/electricalequipments/weldingmachines/weldingaccessories/weldingaccessories.component';
import { MigweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/migweldingmachines/migweldingmachines.component';
import { MeasuringandtestingComponent } from './pages/measuringandtesting/measuringandtesting.component';
import { FueltestingandmeasuringComponent } from './pages/measuringandtesting/fueltestingandmeasuring/fueltestingandmeasuring.component';
import { FlowmetersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/flowmeters/flowmeters.component';
import { FueltestingkitsComponent } from './pages/measuringandtesting/fueltestingandmeasuring/fueltestingkits/fueltestingkits.component';
import { HydrometersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/hydrometers/hydrometers.component';
import { MeasuringcansComponent } from './pages/measuringandtesting/fueltestingandmeasuring/measuringcans/measuringcans.component';
import { MeasuringscalesComponent } from './pages/measuringandtesting/measuringscales/measuringscales.component';
import { MeasuringcylindersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/measuringcylinders/measuringcylinders.component';
import { TestingpasteComponent } from './pages/measuringandtesting/fueltestingandmeasuring/testingpaste/testingpaste.component';
import { ThermometersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/thermometers/thermometers.component';
import { GeneralmeasuringinstrumentsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalmeasuringinstruments.component';
import { CalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/calipers.component';
import { DigitalcalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/digitalcalipers/digitalcalipers.component';
import { VerniercalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/verniercalipers/verniercalipers.component';
import { ClampmetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/clampmeters/clampmeters.component';
import { DialindicatorsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/dialindicators/dialindicators.component';
import { GeneralguagesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalguages/generalguages.component';
import { LaserdistancemetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/laserdistancemeters/laserdistancemeters.component';
import { MeasuringtapesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/measuringtapes/measuringtapes.component';
import { MeasuringwheelsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/measuringwheels/measuringwheels.component';
import { GeneralMetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalmeters/generalmeters.component';
import { MicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/micrometers.component';
import { AnaloguemicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/analoguemicrometers/analoguemicrometers.component';
import { DigitalmicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/digitalmicrometers/digitalmicrometers.component';
import { MultimetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/multimeters/multimeters.component';
import { GeneralTestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generaltesters/generaltesters.component';
import { WaterandlabtestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/waterandlabtesters.component';
import { AlcoholtestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/alcoholtesters/alcoholtesters.component';
import { ConcretetestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/concretetesters/concretetesters.component';
import { WatertestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/watertesters/watertesters.component';
import { LeveltoolsComponent } from './pages/measuringandtesting/leveltools/leveltools.component';
import { DumpinglevelsComponent } from './pages/measuringandtesting/leveltools/dumpinglevels/dumpinglevels.component';
import { LaserlevelsComponent } from './pages/measuringandtesting/leveltools/laserlevels/laserlevels.component';
import { SurveytripodsComponent } from './pages/measuringandtesting/leveltools/surveytripods/surveytripods.component';
import { AnaloguescalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/analoguescales.component';
import { DigitalscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/digitalscales.component';
import { PhmetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/phmeters/phmeters.component';
import { PricingscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/pricingscales/pricingscales.component';
import { PocketscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/pocketscales/pocketscales.component';
import { CranesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/cranes/cranes.component';
import { HangingscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/hangingscales/hangingscales.component';
import { WeighbridgesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/weighbridges/weighbridges.component';
import { KitchenscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/kitchenscales/kitchenscales.component';
import { BathroomscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/bathroomscales/bathroomscales.component';
import { PlatformscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/platformscales/platformscales.component';
import { AnalyticalbalancesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/analyticalbalances/analyticalbalances.component';
import { SpringbalancesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/springbalances/springbalances.component';
import { MechanicalplatformscalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/mechanicalplatformscales/mechanicalplatformscales.component';
import { BeambalancesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/beambalances/beambalances.component';
import { SpiritlevelsComponent } from './pages/measuringandtesting/leveltools/spiritlevels/spiritlevels.component';
import { MoisturetestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/moisturetesters/moisturetesters.component';
import { DigitalthermometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/digitalthermometers/digitalthermometers.component';
import { InfraredthermometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/infraredthermometers/infraredthermometers.component';
import { AnaloguekitchenscalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/analoguekitchenscales/analoguekitchenscales.component';
import { HandtoolsComponent } from './pages/handtools/handtools.component';
import { AllenkeysComponent } from './pages/handtools/category/allenkeys/allenkeys.component';
import { BearingpullersComponent } from './pages/handtools/category/bearingpullers/bearingpullers.component';
import { ChiselsandpunchesComponent } from './pages/handtools/category/chiselsandpunches/chiselsandpunches.component';
import { CrimpingtoolsComponent } from './pages/handtools/category/crimpingtools/crimpingtools.component';
import { DriversComponent } from './pages/handtools/category/drivers/drivers.component';
import { FlaringtoolsComponent } from './pages/handtools/category/flaringtools/flaringtools.component';
import { HammersandmalletsComponent } from './pages/handtools/category/hammersandmallets/hammersandmallets.component';
import { HandrivetersComponent } from './pages/handtools/category/handriveters/handriveters.component';
import { HandtoolsaccessoriesComponent } from './pages/handtools/category/handtoolsaccessories/handtoolsaccessories.component';
import { HandtoolsMeasuringtapesComponent } from './pages/handtools/category/handtoolsmeasuringtapes/handtoolsmeasuringtapes.component';
import { CuttingandgrindingdiscComponent } from './pages/handtools/category/handtoolsaccessories/cuttingandgrindingdisc/cuttingandgrindingdisc.component';
import { DrillbitsComponent } from './pages/handtools/category/handtoolsaccessories/drillbits/drillbits.component';
import { PolishingpadsandbuffersComponent } from './pages/handtools/category/handtoolsaccessories/polishingpadsandbuffers/polishingpadsandbuffers.component';
import { SandingpadsComponent } from './pages/handtools/category/handtoolsaccessories/sandingpads/sandingpads.component';
import { SawbladesComponent } from './pages/handtools/category/handtoolsaccessories/sawblades/sawblades.component';
import { ScrewdriverbitsComponent } from './pages/handtools/category/handtoolsaccessories/screwdriverbits/screwdriverbits.component';
import { PliersandcuttersComponent } from './pages/handtools/category/pliersandcutters/pliersandcutters.component';
import { SawsComponent } from './pages/powertools/bycategories/saws/saws.component';
import { ScrewdriversComponent } from './pages/handtools/category/screwdrivers/screwdrivers.component';
import { SocketsandratchetsComponent } from './pages/handtools/category/socketsandratchets/socketsandratchets.component';
import { SpannersandwrenchesComponent } from './pages/handtools/category/spannersandwrenches/spannersandwrenches.component';
import { TilescutterComponent } from './pages/handtools/category/tilescutter/tilescutter.component';
import { ToolboxesComponent } from './pages/handtools/category/toolboxes/toolboxes.component';
import { ToolsbagsComponent } from './pages/handtools/category/toolsbags/toolsbags.component';
import { ToolssetsComponent } from './pages/handtools/category/toolssets/toolssets.component';
import { UtilityknivesandbladesComponent } from './pages/handtools/category/utilityknivesandblades/utilityknivesandblades.component';
import { ConstructionequipmentComponent } from './pages/constructionequipment/constructionequipment.component';
import { CompactorsComponent } from './pages/constructionequipment/compactors/compactors.component';
import { ConcretemixersComponent } from './pages/constructionequipment/concretemixers/concretemixers.component';
import { ConcretevibratorsComponent } from './pages/constructionequipment/concretevibrators/concretevibrators.component';
import { ConstructionsafetygearComponent } from './pages/constructionequipment/constructionsafetygear/constructionsafetygear.component';
import { DrumtrucksComponent } from './pages/constructionequipment/drumtrucks/drumtrucks.component';
import { JumpingrammersComponent } from './pages/constructionequipment/jumpingrammers/jumpingrammers.component';
import { PokerhosesComponent } from './pages/constructionequipment/pokerhoses/pokerhoses.component';
import { PowertrowelsComponent } from './pages/constructionequipment/powertrowels/powertrowels.component';
import { RebarmachinesComponent } from './pages/constructionequipment/rebarmachines/rebarmachines.component';
import { WheelbarrowsComponent } from './pages/constructionequipment/wheelbarrows/wheelbarrows.component';
import { PressurepumpsComponent } from './pages/pumpingmachines/pressurepumps/pressurepumps.component';
import { SubmersiblepumpsComponent } from './pages/pumpingmachines/submersiblepumps/submersiblepumps.component';
import { VacuumpumpsComponent } from './pages/pumpingmachines/vacuumpumps/vacuumpumps.component';
import { WaterpumpsComponent } from './pages/pumpingmachines/waterpumps/waterpumps.component';
import { CleaningandgardensuppliesComponent } from './pages/cleaningandgardensupplies/cleaningandgardensupplies.component';
import { BrushcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/brushcutters.component';
import { CordlessbruschcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/bycategory/cordlessbruschcutters/cordlessbruschcutters.component';
import { GasolinebrushcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/bycategory/gasolinebrushcutters/gasolinebrushcutters.component';
import { BrushcuttersaccessoriesComponent } from './pages/cleaningandgardensupplies/brushcutters/brushcuttersaccessories/brushcuttersaccessoriescomponent';
import { CleaningaccessoriesComponent } from './pages/cleaningandgardensupplies/cleaningaccessories/cleaningaccessories.component';
import { HoseComponent } from './pages/cleaningandgardensupplies/hose/hose.component';
import { HoseaccessoriesComponent } from './pages/cleaningandgardensupplies/hose/hoseaccessories/hoseaccessories.component';
import { WaterandpumphoseComponent } from './pages/cleaningandgardensupplies/hose/waterandpumphose/waterandpumphose.component';
import { GasolinelawnmowerComponent, } from './pages/cleaningandgardensupplies/lawnmowers/bycategory/gasolinelawnmower/gasolinelawnmower.component';
import { ScrubbersandsweepersComponent } from './pages/cleaningandgardensupplies/scrubbersandsweepers/scrubbersandsweepers.component';
import { VacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/vacuumcleaners.component';
import { IndustrialvacummcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/industrialvacummcleaners/industrialvacummcleaners.component';
import { CyclonevacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/cyclonevacuumcleaners/cyclonevacuumcleaners.component';
import { WetanddryvacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/wetanddryvacuumcleaners/wetanddryvacuumcleaners.component';
import { LawnmowersComponent } from './pages/cleaningandgardensupplies/lawnmowers/lawnmowers.component';
import { ElectricandcordlesslawnmowerComponent } from './pages/cleaningandgardensupplies/lawnmowers/bycategory/electriclandcordlessawnmower/electriclandcordlessawnmower.component';
import { PressurehoseComponent } from './pages/cleaningandgardensupplies/hose/pressurehose/pressurehose.component';
import { PetrolpressureswashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/petrolpressureswashers/petrolpressureswashers.component';
import { IndustrialpressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/industrialpressurewashers/industrialpressurewashers.component';
import { CordlesspressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/cordlesspressurewashers/cordlesspressurewashers.component';
import { SafetyhelmetsComponent } from './pages/ppe/bycategory/headprotections/safetyhelmets/safetyhelmets.component';
import { WeldinghelmetsComponent } from './pages/ppe/bycategory/headprotections/weldinghelmets/weldinghelmets.component';
import { FallarrestersComponent } from './pages/constructionequipment/fallarresters/fallarresters.component';
import { HydraulicshoppressComponent } from './pages/workshopgarage/hydraulicshoppress/hydraulicshoppress.component';
import { CordlessimpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/cordlessimpactwrenches/cordlessimpactwrenches.component';
import { ElectricimpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/electricimpactwrenches/electricimpactwrenches.component';
import { PnuematicimpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/pnuematicimpactwrenches/pnuematicimpactwrenches.component';
import { BandsawsComponent } from './pages/powertools/bycategories/saws/bandsaws/bandsaws.component';
import { ChainsawsComponent } from './pages/powertools/bycategories/saws/chainsaws/chainsaws.component';
import { CircularsawsComponent } from './pages/powertools/bycategories/saws/circularsaws/circularsaws.component';
import { JigsawsComponent } from './pages/powertools/bycategories/saws/jigsaws/jigsaws.component';
import { MitresawsComponent } from './pages/powertools/bycategories/saws/mitresaws/mitresaws.component';
import { ReciprocatingsawsComponent } from './pages/powertools/bycategories/saws/reciprocatingsaws/reciprocatingsaws.component';
import { TablesawsComponent } from './pages/powertools/bycategories/saws/tablesaws/tablesaws.component';
import { PneumaticjackhammersComponent } from './pages/powertools/bycategories/jackhammers/pneumaticjackhammers/pneumaticjackhammers.component';
import { DemolitionbreakersComponent } from './pages/powertools/bycategories/jackhammers/demolitionbreakers/demolitionbreakers.component';
import { GrindersComponent } from './pages/powertools/bycategories/grinders/grinders.component';
import { BenchgrindersComponent } from './pages/powertools/bycategories/grinders/benchgrinders/benchgrinders.component';
import { DieandminigrindersComponent } from './pages/powertools/bycategories/grinders/dieandminigrinders/dieandminigrinders.component';
import { AnglegrindersComponent } from './pages/powertools/bycategories/grinders/anglegrinders/anglegrinders.component';
import { CordlessblowersComponent } from './pages/powertools/bycategories/blowers/cordlessblowers/cordlessblowers.component';
import { GasolineblowersComponent } from './pages/powertools/bycategories/blowers/gasolineblowers/gasolineblowers.component';
import { ElectricblowersComponent } from './pages/powertools/bycategories/blowers/electricblowers/electricblowers.component';
import { PressurewashersaccessoriesComponent } from './pages/cleaningandgardensupplies/pressurewashers/pressurewashersaccessories/pressurewashersaccessories.component';
import { UmbrellasComponent } from './pages/ppe/bycategory/clothing/umbrellas/umbrellas.component';
import { HandsawsComponent } from './pages/handtools/category/handsaws/handsaws.component';
import { FarmequipmentsComponent } from './pages/farmequipments/farmequipments.component';
import { FarmmachinesComponent } from './pages/farmequipments/farmmachines/farmmachines.component';
import { FarmtoolsComponent } from './pages/farmequipments/farmtools/farmtools.component';
import { GetAQuoteComponent } from './pages/get-a-quote/get-a-quote.component';
import { BulkordersComponent } from './pages/bulkorders/bulkorders.component';
import { ProductcheckoutComponent } from './pages/shops/productcheckout/productcheckout.component';
import { ConfirmationComponent } from './pages/shops/confirmation/confirmation.component';
import { ShoppingcartComponent } from './pages/shops/shoppingcart/shoppingcart.component';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { MarineandoffshoreComponent } from './pages/marineandoffshore/marineandoffshore.component';
import { DredgepipefloatersComponent } from './pages/marineandoffshore/dredgepipefloaters/dredgepipefloaters.component';
import { LifebuoysComponent } from './pages/marineandoffshore/lifebuoys/lifebuoys.component';
import { MarinesafetyequipmentsComponent } from './pages/marineandoffshore/marinesafetyequipments/marinesafetyequipments.component';
import { LifevestsComponent } from './pages/marineandoffshore/lifevests/lifevests.component';
import { LifejacketsComponent } from './pages/marineandoffshore/lifejackets/lifejackets.component';
import { SafetyjoggersComponent } from './pages/ppe/bybrands/safetyjoggers/safetyjoggers.component';
import { CablerampsComponent } from './pages/fireandtrafficsafety/trafficsafety/cableramps/cableramps.component';
import { TrafficcontrolsystemsComponent } from './pages/fireandtrafficsafety/trafficsafety/trafficcontrolsystems/trafficcontrolsystems.component';
import { EmergencyalertsystemsComponent } from './pages/fireandtrafficsafety/firesafety/emergencyalertsystems/emergencyalertsystems.component';
import { TapesandadhesivesComponent } from './pages/ppe/bycategory/tapesandadhesives/tapesandadhesives.component';
import { ElectricanglegrindersComponent } from './pages/powertools/bycategories/grinders/anglegrinders/electricanglegrinders/electricanglegrinders.component';
import { CordlessanglegrindersComponent } from './pages/powertools/bycategories/grinders/anglegrinders/cordlessanglegrinders/cordlessanglegrinders.component';
import { PressurekitsComponent } from './pages/workshopgarage/pressurekits/pressurekits.component';
import { ChalklinereelsComponent } from './pages/handtools/category/chalklinereels/chalklinereels.component';
import { LubricantsComponent } from './pages/lubricantschemicalandprotectivesprayer/lubricants/lubricants.component';
import { ChemicalapplicationsandsprayerComponent } from './pages/lubricantschemicalandprotectivesprayer/chemicalapplicationsandsprayer/chemicalapplicationsandsprayer.component';
import { PaintsprayerComponent } from './pages/lubricantschemicalandprotectivesprayer/paintsprayer/paintsprayer.component';
import { VibratorsComponent } from './pages/powertools/bycategories/vibrators/vibrators.component';
import { EarthaugersComponent } from './pages/powertools/bycategories/drills/earthaugers/earthaugers.component';
import { ElectricrotaryhammerdrillsComponent } from './pages/powertools/bycategories/drills/rotaryhammerdrills/electricrotaryhammerdrills/electricrotaryhammerdrills.component';
import { CordlessrotaryhammerdrillsComponent } from './pages/powertools/bycategories/drills/rotaryhammerdrills/cordlessrotaryhammerdrills/cordlessrotaryhammerdrills.component';
import { AircompressoraccessoriesComponent } from './pages/workshopgarage/aircompressoraccessories/aircompressoraccessories.component';
import { StaplegunComponent } from './pages/handtools/category/staplegun/staplegun.component';
import { TapanddieComponent } from './pages/handtools/category/tapanddie/tapanddie.component';
import { AdhesivetapesComponent } from './pages/sealantadhesive/adhesivetapes/adhesivetapes.component';
import { ColdroomwearsComponent } from './pages/ppe/bycategory/clothing/coldroomwears/coldroomwears.component';
import { SafetysignsComponent } from './pages/ppe/bycategory/safetysigns/safetysigns.component';
import { HeadlampsComponent } from './pages/ppe/bycategory/headlamps/headlamps.component';
import { GpstrackerComponent } from './pages/measuringandtesting/generalmeasuringinstruments/gpstracker/gpstracker.component';
import { HandgreasegunsComponent } from './pages/handtools/category/handgreaseguns/handgreaseguns.component';
import { WeldingprotectionwearsComponent } from './pages/ppe/bycategory/clothing/weldingprotectionwears/weldingprotectionwears.component';
import { MediajacketsComponent } from './pages/ppe/bycategory/clothing/mediajackets/mediajackets.component';
import { KnapsacksprayersComponent } from './pages/farmequipments/knapsacksprayers/knapsacksprayers.component';
import { AgrochemicalsComponent } from './pages/farmequipments/agrochemicals/agrochemicals.component';
import { TrafficandsolarlightsComponent } from './pages/fireandtrafficsafety/trafficsafety/trafficandsolarlights/trafficandsolarlights.component';
import { MoistureanalyzersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/moistureanalyzers/moistureanalyzers.component';
import { EnginesandmotorsComponent } from './pages/workshopgarage/enginesandmotors/enginesandmotors.component';
import { AirnailgunsComponent } from './pages/handtools/category/airnailguns/airnailguns.component';
import { ManualspraygunsComponent } from './pages/handtools/category/manualsprayguns/manualsprayguns.component';
import { CaulkingandpufoamgunsComponent } from './pages/sealantadhesive/caulkingandpufoamguns/caulkingandpufoamguns.component';
import { WalkietalkiesComponent } from './pages/ppe/bycategory/securityandsurveillance/walkietalkies/walkietalkies.component';
import { VericaclampComponent } from './pages/workshopgarage/lifting/vericaclamp/vericaclamp.component';
import { JumperstartersComponent } from './pages/electricalequipments/jumperstarters/jumperstarters.component';
import { GrindingstonesandwheelsComponent } from './pages/handtools/category/handtoolsaccessories/grindingstonesandwheels/grindingstonesandwheels.component';
import { ScannersanddectorsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/scannersanddectors/scannersanddectors.component';
import { BatterytestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/batterytesters/batterytesters.component';
import { HolesawsComponent } from './pages/handtools/category/holesaws/holesaws.component';
import { CorecuttersandbitsComponent } from './pages/handtools/category/handtoolsaccessories/corecuttersandbits/corecuttersandbits.component';
import { RouterbitsComponent } from './pages/handtools/category/handtoolsaccessories/routerbits/routerbits.component';
import { ThicknessguagesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/thicknessguages/thicknessguages.component';
import { GardensprinklersComponent } from './pages/cleaningandgardensupplies/gardensprinklers/gardensprinklers.component';
import { GeneralmeasuringingtoolsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalmeasuringingtools/generalmeasuringingtools.component';
import { DoorhardwaresComponent } from './pages/handtools/category/doorhardwares/doorhardwares.component';
import { OilextractorsanddrainersComponent } from './pages/workshopgarage/oilextractorsanddrainers/oilextractorsanddrainers.component';
import { SuctioncupsComponent } from './pages/handtools/category/suctioncups/suctioncups.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CompareComponent } from './pages/compare/compare.component';
import { PowercrimpingtoolsComponent } from './pages/powertools/bycategories/powercrimpingtools/powercrimpingtools.component';
import { PersonalsafetyComponent } from './pages/ppe/bycategory/securityandsurveillance/personalsafety/personalsafety.component';
import { CablepullersandfishtapesComponent } from './pages/handtools/category/cablepullersandfishtapes/cablepullersandfishtapes.component';
import { HydraulicpumpsComponent } from './pages/workshopgarage/hydraulicpumps/hydraulicpumps.component';
import { GeneralautomotivetoolsComponent } from './pages/workshopgarage/generalautomotivetools/generalautomotivetools.component';
import { BreathingapparatusComponent } from './pages/ppe/bycategory/breathingapparatus/breathingapparatus.component';
import { DialboreguagesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/dialboreguages/dialboreguages.component';
import { TestingequipmentComponent } from './pages/constructionequipment/testingequipment/testingequipment.component';
import { SolderingequipmentComponent } from './pages/electricalequipments/solderingequipment/solderingequipment.component';
import { CutoffsawsComponent } from './pages/powertools/bycategories/saws/cutoffsaws/cutoffsaws.component';
import { PipethreadersComponent } from './pages/handtools/category/pipethreaders/pipethreaders.component';
import { CentrifugesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/centrifuges/centrifuges.component';
import { SurveyinstrumentsComponent } from './pages/measuringandtesting/leveltools/surveyinstruments/surveyinstruments.component';
import { AirblowgunsComponent } from './pages/handtools/category/airblowguns/airblowguns.component';
import { PipecuttersComponent } from './pages/handtools/category/pipecutters/pipecutters.component';
import { GasanalyzersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/gasanalyzers/gasanalyzers.component';
import { CablecuttersComponent } from './pages/handtools/category/cablecutters/cablecutters.component';
import { PipebendersComponent } from './pages/handtools/category/pipebenders/pipebenders.component';
import { ElectricpipebendersComponent } from './pages/powertools/bycategories/electricpipebenders/electricpipebenders.component';
import { TorquewrenchesComponent } from './pages/handtools/category/torquewrenches/torquewrenches.component';
import { LockoutstationsComponent } from './pages/ppe/bycategory/lockoutstations/lockoutstations.component';
import { GardentoolsComponent } from './pages/cleaningandgardensupplies/gardentools/gardentools.component';
import { AirlesssprayersComponent } from './pages/powertools/bycategories/airlesssprayers/airlesssprayers.component';
import { HydraulichoseComponent } from './pages/cleaningandgardensupplies/hose/hydraulichose/hydraulichose.component';
import { HosereelsComponent } from './pages/cleaningandgardensupplies/hose/hosereels/hosereels.component';
import { ConcretepumpsComponent } from './pages/constructionequipment/concretepumps/concretepumps.component';
import { DrumrollercompactorsComponent } from './pages/constructionequipment/drumrollercompactors/drumrollercompactors.component';
import { RoadmarkingmachinesComponent } from './pages/constructionequipment/roadmarkingmachines/roadmarkingmachines.component';
import { ElectricalcablepullersComponent } from './pages/powertools/bycategories/electricalcablepullers/electricalcablepullers.component';
import { ElectricalcablecuttersComponent } from './pages/powertools/bycategories/electricalcablecutters/electricalcablecutters.component';
import { ConcretescreedersComponent } from './pages/constructionequipment/concretescreeders/concretescreeders.component';
import { SteamcleanermachinesComponent } from './pages/cleaningandgardensupplies/steamecleanermachines/steamcleanermachines.component';
import { PlasteringtoolsComponent } from './pages/handtools/category/plasteringtools/plasteringtools.component';
import { ScaleaccessoriesComponent } from './pages/measuringandtesting/measuringscales/scaleaccessories/scaleaccessories.component';
import { HandgearwinchesComponent } from './pages/handtools/category/handgearwinches/handgearwinches.component';
import { GeneralconcreteequipmentComponent } from './pages/constructionequipment/generalconcreteequipment/generalconcreteequipment.component';
import { GasolinejackhammersComponent } from './pages/powertools/bycategories/jackhammers/gasolinejackhammers/gasolinejackhammers.component';
import { DippingtapeComponent } from './pages/measuringandtesting/generalmeasuringinstruments/dippingtape/dippingtape.component';












@NgModule({
  declarations: [

    AppComponent,
    PagesComponent,
    AboutusComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SliderComponent,
    SealantadhesiveComponent,
    WorkshopgarageComponent,
    LoginComponent,
    TrackorderComponent,
    DeliverypolicyComponent,
    WarrantyandreturnsComponent,
    TermsandconditionsComponent,
    PrivacypolicyComponent,
    ProductcheckoutComponent,
    ConfirmationComponent,
    SearchBarComponent,
    ShoppingcartComponent,
    PaginationComponent,
    SearchResultsComponent,
    ChemicalwearsComponent,
    BagclosermachinesComponent,
    WheellocksComponent,
    PuttyknifeComponent,
    BrandsComponent,
    DashboardComponent,
    ProductdetailsComponent,
    HandglovesComponent,
    SafetybootsComponent,
    SafetyshoesComponent,
    SafetygooglesComponent,
    SafetyhelmetsComponent,
    CombokitsComponent,
    SafetyharnessandlanyardsComponent,
    FallarrestorsComponent,
    BumpcapsComponent,
    FlashlightsComponent,
    SafetyrainwearsComponent,
    GasdetectorsComponent,
    EmergencyeyewashComponent,
    SecuritygearsComponent,
    StanchionsComponent,
    DisposablesComponent,
    WeldinghelmetsComponent,
    ShopcategoriesComponent,
    CoverallsComponent,
    ReflectivevestsComponent,
    LabcoatsComponent,
    FireresistantwearsComponent,
    ElectricpressurewashersComponent,
    HeatgunsComponent,
    HeadprotectionsComponent,
    FaceshieldsComponent,
    SpillkitsComponent,
    FirstaidsComponent,
    UmbrellasComponent,
    NosemasksComponent,
    EarmuffsComponent,
    EarplugsComponent,
    FallarrestorsComponent,
    CuttingmachinesComponent,
    MixersComponent,
    PolishersComponent,
    SpraygunsComponent,
    BagclosermachinesComponent,
    NailersComponent,
    GeneralguntoolsComponent,
    TrimmersComponent,
    ImpulsesealersComponent,
    PlanersComponent,
    PprandthreadingmachinesComponent,
    RoutersComponent,
    SandersComponent,
    EdgebandingmachinesComponent,
    WallchasersComponent,
    CordeddrillsComponent,
    CordlessdrillsanddriversComponent,
    CoredrillsComponent,
    RotaryhammerdrillsComponent,
    MagneticdrillsComponent,
    DrillpressesComponent,
    ShoppressComponent,
    FueltransferpumpsComponent,
    SiliconesealantsComponent,
    PufoamsealantsComponent,
    EpoxyadhesivesComponent,
    ConstructionadhesivesComponent,
    ContactadhesivesComponent,
    GluesComponent,
    WaterproofsealantsComponent,
    LeakfillersComponent,
    GumsComponent,
    GluegunsComponent,
    FireblanketsComponent,
    FireextinguishersComponent,
    SmokeFirealarmsComponent,
    FirehosecabinetComponent,
    FirehoseComponent,
    TrafficconesComponent,
    CautiontapesComponent,
    ConvexmirrorsComponent,
    InspectionmirrorsComponent,
    MetaldetectorsComponent,
    ReflectorsComponent,
    RoadbarriersComponent,
    SafetyvestsComponent,
    WeldingaccessoriesComponent,
    SpeedbumpsComponent,
    TrafficconesComponent,
    WarningsignsComponent,
    WheelchocksComponent,
    AircompressorsComponent,
    CarcreepersComponent,
    LaddersComponent,
    LaddersComponent,
    ChainblocksandhoistsComponent,
    DrumhandlingequimentsComponent,
    EnginecranesComponent,
    JackandliftsComponent,
    LiftingbeltsComponent,
    PalletetrucksComponent,
    PalletstackersComponent,
    TrolleysComponent,
    PowerextensionandreelsComponent,
    RotarypumpsComponent,
    TestingbucketsComponent,
    WheellocksComponent,
    TirechangesComponent,
    WheelalignmentguagesComponent,
    WheelbalancersComponent,
    FoldingladdersComponent,
    ExtensionladdersComponent,
    StepladdersComponent,
    WorkbenchesComponent,
    ToolssetComponent,
    ToolscabinetComponent,
    GreasebucketsComponent,
    AutoaircompressorsComponent,
    BatteriesComponent,
    BatterychargersComponent,
    BatterytestersComponent,
    CablewiresandboostersComponent,
    ExtensioncablewiresComponent,
    GeneratorsComponent,
    DesielgeneratorsComponent,
    FallarrestorsComponent,
    InvertergeneratorsComponent,
    PlasmacuttersComponent,
    WeldingmachinesComponent,
    ArcweldingmachinesComponent,
    MmaweldingmachinesComponent,
    TigweldingmachinesComponent,
    MigweldingmachinesComponent,
    WeldingaccessoriesComponent,
    PetrolgeneratorsComponent,
    MeasuringandtestingComponent,
    FueltestingandmeasuringComponent,
    FueltestingkitsComponent,
    HydrometersComponent,
    MeasuringcansComponent,
    TestingpasteComponent,
    ThermometersComponent,
    GeneralmeasuringinstrumentsComponent,
    CalipersComponent,
    DigitalcalipersComponent,
    VerniercalipersComponent,
    ClampmetersComponent,
    DialindicatorsComponent,
    GeneralguagesComponent,
    MeasuringtapesComponent,
    MeasuringwheelsComponent,
    GeneralMetersComponent,
    MicrometersComponent,
    AnaloguemicrometersComponent,
    DigitalmicrometersComponent,
    MultimetersComponent,
    GeneralTestersComponent,
    WaterandlabtestersComponent,
    AlcoholtestersComponent,
    ConcretetestersComponent,
    PhmetersComponent,
    TestingbucketsComponent,
    WatertestersComponent,
    LeveltoolsComponent,
    DumpinglevelsComponent,
    LaserdistancemetersComponent,
    LaserlevelsComponent,
    SurveytripodsComponent,
    MeasuringscalesComponent,
    AnaloguescalesComponent,
    DigitalscalesComponent,
    MeasuringcylindersComponent,
    PricingscalesComponent,
    PocketscalesComponent,
    CranesComponent,
    HangingscalesComponent,
    WeighbridgesComponent,
    KitchenscalesComponent,
    BathroomscalesComponent,
    PlatformscalesComponent,
    AnalyticalbalancesComponent,
    SpringbalancesComponent,
    MechanicalplatformscalesComponent,
    BeambalancesComponent,
    SpiritlevelsComponent,
    DumpinglevelsComponent,
    SurveytripodsComponent,
    MoisturetestersComponent,
    FlowmetersComponent,
    DigitalthermometersComponent,
    InfraredthermometersComponent,
    AnaloguekitchenscalesComponent,
    HandtoolsComponent,
    AllenkeysComponent,
    BearingpullersComponent,
    ChiselsandpunchesComponent,
    CrimpingtoolsComponent,
    DriversComponent,
    CrimpingtoolsComponent,
    FlaringtoolsComponent,
    HammersandmalletsComponent,
    HandrivetersComponent,
    HandtoolsaccessoriesComponent,
    AllenkeysComponent,
    CuttingandgrindingdiscComponent,
    DrillbitsComponent,
    PolishingpadsandbuffersComponent,
    SandingpadsComponent,
    SawbladesComponent,
    ScrewdriverbitsComponent,
    HandtoolsMeasuringtapesComponent,
    PliersandcuttersComponent,
    PuttyknifeComponent,
    HandsawsComponent,
    ScrewdriversComponent,
    SocketsandratchetsComponent,
    SpannersandwrenchesComponent,
    TilescutterComponent,
    ToolboxesComponent,
    ToolsbagsComponent,
    ToolssetsComponent,
    UtilityknivesandbladesComponent,
    AllenkeysComponent,
    ConstructionequipmentComponent,
    CompactorsComponent,
    ConcretemixersComponent,
    ConcretevibratorsComponent,
    ConstructionsafetygearComponent,
    DrumtrucksComponent,
    JumpingrammersComponent,
    PokerhosesComponent,
    PowertrowelsComponent,
    RebarmachinesComponent,
    WheelbarrowsComponent,
    PressurepumpsComponent,
    RotarypumpsComponent,
    SubmersiblepumpsComponent,
    VacuumpumpsComponent,
    WaterpumpsComponent,
    CleaningandgardensuppliesComponent,
    BrushcuttersComponent,
    CordlessbruschcuttersComponent,
    GasolinebrushcuttersComponent,
    BrushcuttersaccessoriesComponent,
    HoseComponent,
    HoseaccessoriesComponent,
    PressurehoseComponent,
    PetrolpressureswashersComponent,
    IndustrialpressurewashersComponent,
    CordlesspressurewashersComponent,
    PressurewashersaccessoriesComponent,
    WaterandpumphoseComponent,
    ElectricandcordlesslawnmowerComponent,
    GasolinelawnmowerComponent,
    ScrubbersandsweepersComponent,
    VacuumcleanersComponent,
    IndustrialvacummcleanersComponent,
    CyclonevacuumcleanersComponent,
    WetanddryvacuumcleanersComponent,
    CleaningaccessoriesComponent,
    FallarrestorsComponent,
    FallarrestersComponent,
    HydraulicshoppressComponent,
    CordlessimpactwrenchesComponent,
    ElectricimpactwrenchesComponent,
    PnuematicimpactwrenchesComponent,
    PneumaticjackhammersComponent,
    DemolitionbreakersComponent,
    BandsawsComponent,
    ChainsawsComponent,
    CircularsawsComponent,
    JigsawsComponent,
    MitresawsComponent,
    ReciprocatingsawsComponent,
    TablesawsComponent,
    GrindersComponent,
    BenchgrindersComponent,
    DieandminigrindersComponent,
    AnglegrindersComponent,
    CordlessblowersComponent,
    GasolineblowersComponent,
    ElectricblowersComponent,
    FarmequipmentsComponent,
    FarmmachinesComponent,
    FarmtoolsComponent,
    GetAQuoteComponent,
    BulkordersComponent,
    ProductListComponent,
    MarineandoffshoreComponent,
    DredgepipefloatersComponent,
    LifebuoysComponent,
    MarinesafetyequipmentsComponent,
    LifevestsComponent,
    LifejacketsComponent,
    SafetyjoggersComponent,
    CablerampsComponent,
    TrafficcontrolsystemsComponent,
    EmergencyalertsystemsComponent,
    TapesandadhesivesComponent,
    ElectricanglegrindersComponent,
    CordlessanglegrindersComponent,
    PressurekitsComponent,
    ChalklinereelsComponent,
    LubricantsComponent,
    ChemicalapplicationsandsprayerComponent,
    PaintsprayerComponent,
    VibratorsComponent,
    EarthaugersComponent,
    ElectricrotaryhammerdrillsComponent,
    CordlessrotaryhammerdrillsComponent,
    AircompressoraccessoriesComponent,
    StaplegunComponent,
    TapanddieComponent,
    AdhesivetapesComponent,
    ColdroomwearsComponent,
    SafetysignsComponent,
    HeadlampsComponent,
    GpstrackerComponent,
    HandgreasegunsComponent,
    WeldingprotectionwearsComponent,
    MediajacketsComponent,
    KnapsacksprayersComponent,
    AgrochemicalsComponent,
    TrafficandsolarlightsComponent,
    MoistureanalyzersComponent,
    EnginesandmotorsComponent,
    AirnailgunsComponent,
    ManualspraygunsComponent,
    CaulkingandpufoamgunsComponent,
    WalkietalkiesComponent,
    VericaclampComponent,
    JumperstartersComponent,
    GrindingstonesandwheelsComponent,
    ScannersanddectorsComponent,
    HolesawsComponent,
    CorecuttersandbitsComponent,
    RouterbitsComponent,
    ThicknessguagesComponent,
    GardensprinklersComponent,
    GeneralmeasuringingtoolsComponent,
    DoorhardwaresComponent,
    OilextractorsanddrainersComponent,
    SuctioncupsComponent,
    WishlistComponent,
    CompareComponent,
    PowercrimpingtoolsComponent,
    PersonalsafetyComponent,
    CablepullersandfishtapesComponent,
    HydraulicpumpsComponent,
    GeneralautomotivetoolsComponent,
    BreathingapparatusComponent,
    DialboreguagesComponent,
    TestingequipmentComponent,
    SolderingequipmentComponent,
    CutoffsawsComponent,
    PipethreadersComponent,
    CentrifugesComponent,
    SurveyinstrumentsComponent,
    AirblowgunsComponent,
    PipecuttersComponent,
    GasanalyzersComponent,
    CablecuttersComponent,
    PipebendersComponent,
    ElectricpipebendersComponent,
    TorquewrenchesComponent,
    LockoutstationsComponent,
    GardentoolsComponent,
    AirlesssprayersComponent,
    HydraulichoseComponent,
    HosereelsComponent,
    ConcretepumpsComponent,
    DrumrollercompactorsComponent,
    RoadmarkingmachinesComponent,
    ElectricalcablepullersComponent,
    ElectricalcablecuttersComponent,
    ConcretescreedersComponent,
    SteamcleanermachinesComponent,
    PlasteringtoolsComponent,
    ScaleaccessoriesComponent,
    HandgearwinchesComponent,
    GeneralconcreteequipmentComponent,
    GasolinejackhammersComponent,
   DippingtapeComponent

















  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
