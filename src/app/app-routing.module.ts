

import { FallarrestorsComponent } from './pages/ppe/bycategory/fallarrestors/fallarrestors.component';
import { VacuumpumpsComponent } from './pages/pumpingmachines/vacuumpumps/vacuumpumps.component';
import { DrumtrucksComponent } from './pages/constructionequipment/drumtrucks/drumtrucks.component';
import { JumpingrammersComponent } from './pages/constructionequipment/jumpingrammers/jumpingrammers.component';
import { CategoryComponent } from './pages/handtools/category/category.component';
import { ScrubbersandsweepersComponent } from './pages/cleaningandgardensupplies/scrubbersandsweepers/scrubbersandsweepers.component';
import { SpraygunsComponent } from './pages/powertools/bycategories/sprayguns/sprayguns.component';
import { ReciprocatingsawsComponent } from './pages/powertools/bycategories/saws/reciprocatingsaws/reciprocatingsaws.component';
import { ToolssetsComponent } from './pages/handtools/category/toolssets/toolssets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopcategoriesComponent } from './pages/shops/shopcategories/shopcategories.component';
import { ProductcheckoutComponent } from './pages/shops/productcheckout/productcheckout.component';
import { ConfirmationComponent } from './pages/shops/confirmation/confirmation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog/blog.component';
import { BlogdetailsComponent } from './pages/blog/blogdetails/blogdetails.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductdetailsComponent } from './pages/shops/productdetails/productdetails.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BybrandsComponent } from './pages/ppe/bybrands/bybrands.component';
import { BetaComponent } from './pages/ppe/bybrands/beta/beta.component';
import { DickiesComponent } from './pages/ppe/bybrands/dickies/dickies.component';
import { PortwestComponent } from './pages/ppe/bybrands/portwest/portwest.component';
import { RedwingsComponent } from './pages/ppe/bybrands/redwings/redwings.component';
import { SupersteelComponent } from './pages/ppe/bybrands/supersteel/supersteel.component';
import { PPeComponent } from './pages/ppe/ppe.component';
import { BoschComponent } from './pages/powertools/bybrands/bosch/bosch.component';
import { IngcoComponent } from './pages/powertools/bybrands/ingco/ingco.component';
import { MakitaComponent } from './pages/powertools/bybrands/makita/makita.component';
import { MaxmechComponent } from './pages/powertools/bybrands/maxmech/maxmech.component';
import { StanleyComponent } from './pages/powertools/bybrands/stanley/stanley.component';
import { TotalComponent } from './pages/powertools/bybrands/total/total.component';
import { CuttingmachinesComponent } from './pages/powertools/bycategories/cuttingmachines/cuttingmachines.component';
import { DrillsComponent } from './pages/powertools/bycategories/drills/drills.component';
import { GrindersComponent } from './pages/powertools/bycategories/grinders/grinders.component';
import { HeatgunsComponent } from './pages/powertools/bycategories/heatguns/heatguns.component';
import { ImpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/impactwrenches.component';
import { MixersComponent } from './pages/powertools/bycategories/mixers/mixers.component';
import { SandersComponent } from './pages/powertools/bycategories/sanders/sanders.component';
import { SawsComponent } from './pages/powertools/bycategories/saws/saws.component';
import { SealantadhesiveComponent } from './pages/sealantadhesive/sealantadhesive.component';
import { ConstructionadhesivesComponent } from './pages/sealantadhesive/constructionadhesives/constructionadhesives.component';
import { EpoxyadhesivesComponent } from './pages/sealantadhesive/epoxyadhesives/epoxyadhesives.component';
import { PufoamsealantsComponent } from './pages/sealantadhesive/pufoamsealants/pufoamsealants.component';
import { SiliconesealantsComponent } from './pages/sealantadhesive/siliconesealants/siliconesealants.component';
import { TilesadhesivesComponent } from './pages/sealantadhesive/tilesadhesives/tilesadhesives.component';
import { GluesComponent } from './pages/sealantadhesive/glues/glues.component';
import { DewaltComponent } from './pages/powertools/bybrands/dewalt/dewalt.component';
import { ContactadhesivesComponent } from './pages/sealantadhesive/contactadhesives/contactadhesives.component';
import { TrafficsafetyComponent } from './pages/fireandtrafficsafety/trafficsafety/trafficsafety.component';
import { FiresafetyComponent } from './pages/fireandtrafficsafety/firesafety/firesafety.component';
import { FireblanketsComponent } from './pages/fireandtrafficsafety/firesafety/fireblankets/fireblankets.component';
import { FireextinguishersComponent } from './pages/fireandtrafficsafety/firesafety/fireextinguishers/fireextinguishers.component';
import { SmokeFirealarmsComponent } from './pages/fireandtrafficsafety/firesafety/smoke-firealarms/smoke-firealarms.component';
import { RoadbarriersComponent } from './pages/fireandtrafficsafety/trafficsafety/roadbarriers/roadbarriers.component';
import { SafetyvestsComponent } from './pages/fireandtrafficsafety/trafficsafety/safetyvests/safetyvests.component';
import { SpeedbumpsComponent } from './pages/fireandtrafficsafety/trafficsafety/speedbumps/speedbumps.component';
import { TrafficconesComponent } from './pages/fireandtrafficsafety/trafficsafety/trafficcones/trafficcones.component';
import { WarningsignsComponent } from './pages/fireandtrafficsafety/trafficsafety/warningsigns/warningsigns.component';
import { WheelchocksComponent } from './pages/fireandtrafficsafety/trafficsafety/wheelchocks/wheelchocks.component';
import { WorkshopgarageComponent } from './pages/workshopgarage/workshopgarage.component';
import { AircompressorsComponent } from './pages/workshopgarage/aircompressors/aircompressors.component';
import { PowerextensionandreelsComponent } from './pages/workshopgarage/powerextensionandreels/powerextensionandreels.component';
import { ToolscabinetComponent } from './pages/workshopgarage/toolscabinet/toolscabinet.component';
import { ToolssetComponent } from './pages/workshopgarage/toolsset/toolsset.component';
import { WorkbenchesComponent } from './pages/workshopgarage/workbenches/workbenches.component';
import { LaddersComponent } from './pages/workshopgarage/ladders/ladders.component';
import { ExtensionladdersComponent } from './pages/workshopgarage/ladders/extensionladders/extensionladders.component';
import { FoldingladdersComponent } from './pages/workshopgarage/ladders/foldingladders/foldingladders.component';
import { StepladdersComponent } from './pages/workshopgarage/ladders/stepladders/stepladders.component';
import { MeasuringandtestingComponent } from './pages/measuringandtesting/measuringandtesting.component';
import { FlowmetersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/flowmeters/flowmeters.component';
import { FueltestingandmeasuringComponent } from './pages/measuringandtesting/fueltestingandmeasuring/fueltestingandmeasuring.component';
import { FueltestingkitsComponent } from './pages/measuringandtesting/fueltestingandmeasuring/fueltestingkits/fueltestingkits.component';
import { HydrometersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/hydrometers/hydrometers.component';
import { MeasuringcansComponent } from './pages/measuringandtesting/fueltestingandmeasuring/measuringcans/measuringcans.component';
import { MeasuringcylindersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/measuringcylinders/measuringcylinders.component';
import { TestingpasteComponent } from './pages/measuringandtesting/fueltestingandmeasuring/testingpaste/testingpaste.component';
import { ThermometersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/thermometers/thermometers.component';
import { GeneralmeasuringinstrumentsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalmeasuringinstruments.component';
import { ClampmetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/clampmeters/clampmeters.component';
import { MeasuringtapesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/measuringtapes/measuringtapes.component';
import { MultimetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/multimeters/multimeters.component';
import { CalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/calipers.component';
import { DigitalcalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/digitalcalipers/digitalcalipers.component';
import { VerniercalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/verniercalipers/verniercalipers.component';
import { MicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/micrometers.component';
import { AnaloguemicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/analoguemicrometers/analoguemicrometers.component';
import { DigitalmicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/digitalmicrometers/digitalmicrometers.component';
import { LeveltoolsComponent } from './pages/measuringandtesting/leveltools/leveltools.component';
import { DumpinglevelsComponent } from './pages/measuringandtesting/leveltools/dumpinglevels/dumpinglevels.component';
import { LaserlevelsComponent } from './pages/measuringandtesting/leveltools/laserlevels/laserlevels.component';
import { SpiritlevelsComponent } from './pages/measuringandtesting/leveltools/spiritlevels/spiritlevels.component';
import { SurveytripodsComponent } from './pages/measuringandtesting/leveltools/surveytripods/surveytripods.component';
import { SafetyjoggersComponent } from './pages/ppe/bybrands/safetyjoggers/safetyjoggers.component';
import { ThreeMComponent } from './pages/ppe/bybrands/three-m/three-m.component';
import { UvexComponent } from './pages/ppe/bybrands/uvex/uvex.component';
import { BycategoryComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/bycategory.component';
import { PowertoolsComponent } from './pages/powertools/powertools.component';
import { CordeddrillsComponent } from './pages/powertools/bycategories/drills/cordeddrills/cordeddrills.component';
import { CordlessdrillsanddriversComponent } from './pages/powertools/bycategories/drills/cordlessdrillsanddrivers/cordlessdrillsanddrivers.component';
import { CoredrillsComponent } from './pages/powertools/bycategories/drills/coredrills/coredrills.component';
import { MagneticdrillsComponent } from './pages/powertools/bycategories/drills/magneticdrills/magneticdrills.component';
import { DrillpressesComponent } from './pages/powertools/bycategories/drills/drillpresses/drillpresses.component';
import { EdgebandingmachinesComponent } from './pages/powertools/bycategories/edgebandingmachines/edgebandingmachines.component';
import { GeneralguntoolsComponent } from './pages/powertools/bycategories/generalguntools/generalguntools.component';
import { ImpulsesealersComponent } from './pages/powertools/bycategories/impulsesealers/impulsesealers.component';
import { AnglegrindersComponent } from './pages/powertools/bycategories/grinders/anglegrinders/anglegrinders.component';
import { BenchgrindersComponent } from './pages/powertools/bycategories/grinders/benchgrinders/benchgrinders.component';
import { DieandminigrindersComponent } from './pages/powertools/bycategories/grinders/dieandminigrinders/dieandminigrinders.component';
import { NailersComponent } from './pages/powertools/bycategories/nailers/nailers.component';
import { PprandthreadingmachinesComponent } from './pages/powertools/bycategories/pprandthreadingmachines/pprandthreadingmachines.component';
import { RoutersComponent } from './pages/powertools/bycategories/routers/routers.component';
import { BandsawsComponent } from './pages/powertools/bycategories/saws/bandsaws/bandsaws.component';
import { ChainsawsComponent } from './pages/powertools/bycategories/saws/chainsaws/chainsaws.component';
import { CircularsawsComponent } from './pages/powertools/bycategories/saws/circularsaws/circularsaws.component';
import { JigsawsComponent } from './pages/powertools/bycategories/saws/jigsaws/jigsaws.component';
import { TablesawsComponent } from './pages/powertools/bycategories/saws/tablesaws/tablesaws.component';
import { BlowersComponent } from './pages/powertools/bycategories/blowers/blowers.component';
import { CordlessblowersComponent } from './pages/powertools/bycategories/blowers/cordlessblowers/cordlessblowers.component';
import { ElectricblowersComponent } from './pages/powertools/bycategories/blowers/electricblowers/electricblowers.component';
import { GasolineblowersComponent } from './pages/powertools/bycategories/blowers/gasolineblowers/gasolineblowers.component';
import { CombokitsComponent } from './pages/powertools/bycategories/combokits/combokits.component';
import { GumsComponent } from './pages/sealantadhesive/gums/gums.component';
import { LeakfillersComponent } from './pages/sealantadhesive/leakfillers/leakfillers.component';
import { WaterproofsealantsComponent } from './pages/sealantadhesive/waterproofsealants/waterproofsealants.component';
import { FirehoseComponent } from './pages/fireandtrafficsafety/firesafety/firehose/firehose.component';
import { FirehosecabinetComponent } from './pages/fireandtrafficsafety/firesafety/firehosecabinet/firehosecabinet.component';
import { CautiontapesComponent } from './pages/fireandtrafficsafety/trafficsafety/cautiontapes/cautiontapes.component';
import { InspectionmirrorsComponent } from './pages/fireandtrafficsafety/trafficsafety/inspectionmirrors/inspectionmirrors.component';
import { ConvexmirrorsComponent } from './pages/fireandtrafficsafety/trafficsafety/convexmirrors/convexmirrors.component';
import { MetaldetectorsComponent } from './pages/fireandtrafficsafety/trafficsafety/metaldetectors/metaldetectors.component';
import { ReflectorsComponent } from './pages/fireandtrafficsafety/trafficsafety/reflectors/reflectors.component';
import { CarcreepersComponent } from './pages/workshopgarage/carcreepers/carcreepers.component';
import { RotarypumpsComponent } from './pages/workshopgarage/rotarypumps/rotarypumps.component';
import { TestingbucketsComponent } from './pages/workshopgarage/testingbuckets/testingbuckets.component';
import { WheelserviceequipmentComponent } from './pages/workshopgarage/wheelserviceequipment/wheelserviceequipment.component';
import { TirechangesComponent } from './pages/workshopgarage/wheelserviceequipment/tirechanges/tirechanges.component';
import { WheelalignmentguagesComponent } from './pages/workshopgarage/wheelserviceequipment/wheelalignmentguages/wheelalignmentguages.component';
import { WheelbalancersComponent } from './pages/workshopgarage/wheelserviceequipment/wheelbalancers/wheelbalancers.component';
import { BatterytestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/batterytesters/batterytesters.component';
import { DialindicatorsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/dialindicators/dialindicators.component';
import { GeneralguagesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalguages/generalguages.component';
import { LaserdistancemetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/laserdistancemeters/laserdistancemeters.component';
import { WaterandlabtestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/waterandlabtesters.component';
import { ConcretetestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/concretetesters/concretetesters.component';
import { MoisturetestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/moisturetesters/moisturetesters.component';
import { PhmetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/phmeters/phmeters.component';
import { WatertestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/watertesters/watertesters.component';
import { MeasuringscalesComponent } from './pages/measuringandtesting/measuringscales/measuringscales.component';
import { AnaloguescalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/analoguescales.component';
import { DigitalscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/digitalscales.component';
import { MeasuringwheelsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/measuringwheels/measuringwheels.component';
import { GeneralMetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalmeters/generalmeters.component';
import { ConstructionequipmentComponent } from './pages/constructionequipment/constructionequipment.component';
import { ConcretemixersComponent } from './pages/constructionequipment/concretemixers/concretemixers.component';
import { ConcretevibratorsComponent } from './pages/constructionequipment/concretevibrators/concretevibrators.component';
import { ConstructionsafetygearComponent } from './pages/constructionequipment/constructionsafetygear/constructionsafetygear.component';
import { PokerhosesComponent } from './pages/constructionequipment/pokerhoses/pokerhoses.component';
import { RebarmachinesComponent } from './pages/constructionequipment/rebarmachines/rebarmachines.component';
import { WheelbarrowsComponent } from './pages/constructionequipment/wheelbarrows/wheelbarrows.component';
import { CompactorsComponent } from './pages/constructionequipment/compactors/compactors.component';
import { PumpingmachinesComponent } from './pages/pumpingmachines/pumpingmachines.component';
import { FueltransferpumpsComponent } from './pages/pumpingmachines/fueltransferpumps/fueltransferpumps.component';
import { PressurepumpsComponent } from './pages/pumpingmachines/pressurepumps/pressurepumps.component';
import { SubmersiblepumpsComponent } from './pages/pumpingmachines/submersiblepumps/submersiblepumps.component';
import { WaterpumpsComponent } from './pages/pumpingmachines/waterpumps/waterpumps.component';
import { CleaningandgardensuppliesComponent } from './pages/cleaningandgardensupplies/cleaningandgardensupplies.component';
import { BrushcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/brushcutters.component';
import { CordlessbruschcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/bycategory/cordlessbruschcutters/cordlessbruschcutters.component';
import { GasolinebrushcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/bycategory/gasolinebrushcutters/gasolinebrushcutters.component';
import { PressurewashersaccessoriesComponent } from './pages/cleaningandgardensupplies/pressurewashers/pressurewashersaccessories/pressurewashersaccessories.component';
import { HoseComponent } from './pages/cleaningandgardensupplies/hose/hose.component';
import { HoseaccessoriesComponent } from './pages/cleaningandgardensupplies/hose/hoseaccessories/hoseaccessories.component';
import { PressurehoseComponent } from './pages/cleaningandgardensupplies/hose/pressurehose/pressurehose.component';
import { WaterandpumphoseComponent } from './pages/cleaningandgardensupplies/hose/waterandpumphose/waterandpumphose.component';
import { LawnmowersComponent } from './pages/cleaningandgardensupplies/lawnmowers/lawnmowers.component';
import { ElectricandcordlesslawnmowerComponent } from './pages/cleaningandgardensupplies/lawnmowers/bycategory/electriclandcordlessawnmower/electriclandcordlessawnmower.component';
import { GasolinelawnmowerComponent } from './pages/cleaningandgardensupplies/lawnmowers/bycategory/gasolinelawnmower/gasolinelawnmower.component';
import { PrincegardenComponent } from './pages/cleaningandgardensupplies/lawnmowers/bybrands/princegarden/princegarden.component';
import { PressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/pressurewashers.component';
import { CordlesspressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/cordlesspressurewashers/cordlesspressurewashers.component';
import { ElectricpressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/electricpressurewashers/electricpressurewashers.component';
import { IndustrialpressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/industrialpressurewashers/industrialpressurewashers.component';
import { PetrolpressureswashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/petrolpressureswashers/petrolpressureswashers.component';
import { KarcherComponent } from './pages/cleaningandgardensupplies/pressurewashers/bybrands/karcher/karcher.component';
import { VacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/vacuumcleaners.component';
import { IndustrialvacummcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/industrialvacummcleaners/industrialvacummcleaners.component';
import { CyclonevacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/cyclonevacuumcleaners/cyclonevacuumcleaners.component';
import { WetanddryvacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/wetanddryvacuumcleaners/wetanddryvacuumcleaners.component';
import { FarmequipmentsComponent } from './pages/farmequipments/farmequipments.component';
import { FarmtoolsComponent } from './pages/farmequipments/farmtools/farmtools.component';
import { FarmmachinesComponent } from './pages/farmequipments/farmmachines/farmmachines.component';
import { MsaComponent } from './pages/ppe/bybrands/msa/msa.component';
import { CordlessimpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/cordlessimpactwrenches/cordlessimpactwrenches.component';
import { PnuematicimpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/pnuematicimpactwrenches/pnuematicimpactwrenches.component';
import { ElectricalequipmentsComponent } from './pages/electricalequipments/electricalequipments.component';
import { AutoaircompressorsComponent } from './pages/electricalequipments/autoaircompressors/autoaircompressors.component';
import { BatteriesComponent } from './pages/electricalequipments/batteries/batteries.component';
import { BatterychargersComponent } from './pages/electricalequipments/batterychargers/batterychargers.component';
import { ExtensioncablewiresComponent } from './pages/electricalequipments/extensioncablewires/extensioncablewires.component';
import { GeneratorsComponent } from './pages/electricalequipments/generators/generators.component';
import { InvertergeneratorsComponent } from './pages/electricalequipments/generators/invertergenerators/invertergenerators.component';
import { PetrolgeneratorsComponent } from './pages/electricalequipments/generators/petrolgenerators/petrolgenerators.component';
import { PlasmacuttersComponent } from './pages/electricalequipments/plasmacutters/plasmacutters.component';
import { MigweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/migweldingmachines/migweldingmachines.component';
import { MmaweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/mmaweldingmachines/mmaweldingmachines.component';
import { TigweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/tigweldingmachines/tigweldingmachines.component';
import { WeldingaccessoriesComponent } from './pages/electricalequipments/weldingmachines/weldingaccessories/weldingaccessories.component';
import { WeldingmachinesComponent } from './pages/electricalequipments/weldingmachines/weldingmachines.component';
import { CablewiresandboostersComponent } from './pages/electricalequipments/cablewiresandboosters/cablewiresandboosters.component';
import { HandtoolsaccessoriesComponent } from './pages/handtools/category/handtoolsaccessories/handtoolsaccessories.component';
import { ChiselsandpunchesComponent } from './pages/handtools/category/chiselsandpunches/chiselsandpunches.component';
import { CrimpingtoolsComponent } from './pages/handtools/category/crimpingtools/crimpingtools.component';
import { DriversComponent } from './pages/handtools/category/drivers/drivers.component';
import { FlaringtoolsComponent } from './pages/handtools/category/flaringtools/flaringtools.component';
import { HammersandmalletsComponent } from './pages/handtools/category/hammersandmallets/hammersandmallets.component';
import { HandrivetersComponent } from './pages/handtools/category/handriveters/handriveters.component';
import { PliersandcuttersComponent } from './pages/handtools/category/pliersandcutters/pliersandcutters.component';
import { SocketsandratchetsComponent } from './pages/handtools/category/socketsandratchets/socketsandratchets.component';
import { SpannersandwrenchesComponent } from './pages/handtools/category/spannersandwrenches/spannersandwrenches.component';
import { ToolsbagsComponent } from './pages/handtools/category/toolsbags/toolsbags.component';
import { ScrewdriversComponent } from './pages/handtools/category/screwdrivers/screwdrivers.component';
import { TilescutterComponent } from './pages/handtools/category/tilescutter/tilescutter.component';
import { ToolboxesComponent } from './pages/handtools/category/toolboxes/toolboxes.component';
import { UtilityknivesandbladesComponent } from './pages/handtools/category/utilityknivesandblades/utilityknivesandblades.component';
import { DrillbitsComponent } from './pages/handtools/category/handtoolsaccessories/drillbits/drillbits.component';
import { PolishingpadsandbuffersComponent } from './pages/handtools/category/handtoolsaccessories/polishingpadsandbuffers/polishingpadsandbuffers.component';
import { SandingpadsComponent } from './pages/handtools/category/handtoolsaccessories/sandingpads/sandingpads.component';
import { SawbladesComponent } from './pages/handtools/category/handtoolsaccessories/sawblades/sawblades.component';
import { ScrewdriverbitsComponent } from './pages/handtools/category/handtoolsaccessories/screwdriverbits/screwdriverbits.component';
import { CoverallsComponent } from './pages/ppe/bycategory/clothing/coveralls/coveralls.component';
import { FireresistantwearsComponent } from './pages/ppe/bycategory/clothing/fireresistantwears/fireresistantwears.component';
import { FlashlightsComponent } from './pages/ppe/bycategory/flashlights/flashlights.component';
import { LabcoatsComponent } from './pages/ppe/bycategory/clothing/labcoats/labcoats.component';
import { ReflectivevestsComponent } from './pages/ppe/bycategory/clothing/reflectivevests/reflectivevests.component';
import { EmergencyeyewashComponent } from './pages/ppe/bycategory/emergencyeyewash/emergencyeyewash.component';
import { HandglovesComponent } from './pages/ppe/bycategory/handgloves/handgloves.component';
import { HeadprotectionsComponent } from './pages/ppe/bycategory/headprotections/headprotections.component';
import { BumpcapsComponent } from './pages/ppe/bycategory/headprotections/bumpcaps/bumpcaps.component';
import { FaceshieldsComponent } from './pages/ppe/bycategory/headprotections/faceshields/faceshields.component';
import { WeldinghelmetsComponent } from './pages/ppe/bycategory/headprotections/weldinghelmets/weldinghelmets.component';
import { EarmuffsComponent } from './pages/ppe/bycategory/respiratoryandhearing/earmuffs/earmuffs.component';
import { EarplugsComponent } from './pages/ppe/bycategory/respiratoryandhearing/earplugs/earplugs.component';
import { NosemasksComponent } from './pages/ppe/bycategory/respiratoryandhearing/nosemasks/nosemasks.component';
import { SafetybootsComponent } from './pages/ppe/bycategory/safetyboots/safetyboots.component';
import { SafetygooglesComponent } from './pages/ppe/bycategory/safetygoogles/safetygoogles.component';
import { SafetyhelmetsComponent } from './pages/ppe/bycategory/headprotections/safetyhelmets/safetyhelmets.component';
import { SafetyshoesComponent } from './pages/ppe/bycategory/safetyshoes/safetyshoes.component';
import { SpillkitsComponent } from './pages/ppe/bycategory/spillkits/spillkits.component';
import { FirstaidsComponent } from './pages/ppe/bycategory/firstaids/firstaids.component';
import { RespiratoryandhearingComponent } from './pages/ppe/bycategory/respiratoryandhearing/respiratoryandhearing.component';
import { JackhammersComponent } from './pages/powertools/bycategories/jackhammers/jackhammers.component';
import { DemolitionbreakersComponent } from './pages/powertools/bycategories/jackhammers/demolitionbreakers/demolitionbreakers.component';
import { PneumaticjackhammersComponent } from './pages/powertools/bycategories/jackhammers/pneumaticjackhammers/pneumaticjackhammers.component';
import { PolishersComponent } from './pages/powertools/bycategories/polishers/polishers.component';
import { TrimmersComponent } from './pages/powertools/bycategories/trimmers/trimmers.component';
import { PlanersComponent } from './pages/powertools/bycategories/planers/planers.component';
import { WallchasersComponent } from './pages/powertools/bycategories/wallchasers/wallchasers.component';
import { ArcweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/arcweldingmachines/arcweldingmachines.component';
import { BearingpullersComponent } from './pages/handtools/category/bearingpullers/bearingpullers.component';
import { BeambalancesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/beambalances/beambalances.component';
import { MechanicalplatformscalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/mechanicalplatformscales/mechanicalplatformscales.component';
import { SpringbalancesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/springbalances/springbalances.component';
import { AnalyticalbalancesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/analyticalbalances/analyticalbalances.component';
import { CranesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/cranes/cranes.component';
import { HangingscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/hangingscales/hangingscales.component';
import { KitchenscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/kitchenscales/kitchenscales.component';
import { PocketscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/pocketscales/pocketscales.component';
import { PricingscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/pricingscales/pricingscales.component';
import { WeighbridgesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/weighbridges/weighbridges.component';
import { GasdetectorsComponent } from './pages/ppe/bycategory/gasdetectors/gasdetectors.component';
import { DisposablesComponent } from './pages/ppe/bycategory/clothing/disposables/disposables.component';
import { CleaningaccessoriesComponent } from './pages/cleaningandgardensupplies/cleaningaccessories/cleaningaccessories.component';
import { GeneralTestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generaltesters/generaltesters.component';
import { LiftingComponent } from './pages/workshopgarage/lifting/lifting.component';
import { DrumhandlingequimentsComponent } from './pages/workshopgarage/lifting/drumhandlingequiments/drumhandlingequiments.component';
import { EnginecranesComponent } from './pages/workshopgarage/lifting/enginecranes/enginecranes.component';
import { JackandliftsComponent } from './pages/workshopgarage/lifting/jackandlifts/jackandlifts.component';
import { LiftingbeltsComponent } from './pages/workshopgarage/lifting/liftingbelts/liftingbelts.component';
import { PalletetrucksComponent } from './pages/workshopgarage/lifting/palletetrucks/palletetrucks.component';
import { PalletstackersComponent } from './pages/workshopgarage/lifting/palletstackers/palletstackers.component';
import { ChainblocksandhoistsComponent } from './pages/workshopgarage/lifting/chainblocksandhoists/chainblocksandhoists.component';
import { TrolleysComponent } from './pages/workshopgarage/lifting/trolleys/trolleys.component';
import { EdonComponent } from './pages/powertools/bybrands/edon/edon.component';
import { SecurityandsurveillanceComponent } from './pages/ppe/bycategory/securityandsurveillance/securityandsurveillance.component';
import { SecuritygearsComponent } from './pages/ppe/bycategory/securityandsurveillance/securitygears/securitygears.component';
import { StanchionsComponent } from './pages/ppe/bycategory/securityandsurveillance/stanchions/stanchions.component';
import { PagesComponent } from './pages/pages.component';
import { DeliverypolicyComponent } from './pages/pages/deliverypolicy/deliverypolicy.component';
import { WarrantyandreturnsComponent } from './pages/pages/warrantyandreturns/warrantyandreturns.component';
import { TermsandconditionsComponent } from './pages/pages/termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './pages/pages/privacypolicy/privacypolicy.component';
import { FaqComponent } from './pages/pages/faq/faq.component';
import { SearchResultsComponent } from './pages/search/search-results/search-results.component';
import { ChemicalwearsComponent } from './pages/ppe/bycategory/clothing/chemicalwears/chemicalwears.component';
import { BagclosermachinesComponent } from './pages/powertools/bycategories/bagclosermachines/bagclosermachines.component';
import { WheellocksComponent } from './pages/workshopgarage/wheelserviceequipment/wheellocks/wheellocks.component';
import { DesielgeneratorsComponent } from './pages/electricalequipments/generators/desielgenerators/desielgenerators.component';
import { AlcoholtestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/alcoholtesters/alcoholtesters.component';
import { PlatformscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/platformscales/platformscales.component';
import { BathroomscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/bathroomscales/bathroomscales.component';
import { CuttingandgrindingdiscComponent } from './pages/handtools/category/handtoolsaccessories/cuttingandgrindingdisc/cuttingandgrindingdisc.component';
import { PuttyknifeComponent } from './pages/handtools/category/puttyknife/puttyknife.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { SafetyharnessandlanyardsComponent } from './pages/ppe/bycategory/safetyharnessandlanyards/safetyharnessandlanyards.component';
import { SafetyrainwearsComponent } from './pages/ppe/bycategory/safetyrainwears/safetyrainwears.component';
import { RotaryhammerdrillsComponent } from './pages/powertools/bycategories/drills/rotaryhammerdrills/rotaryhammerdrills.component';
import { ShoppressComponent } from './pages/powertools/bycategories/shoppress/shoppress.component';
import { PagesinfoComponent } from './pages/pages/pagesinfo.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { GluegunsComponent } from './pages/powertools/bycategories/glueguns/glueguns.component';
import { GreasebucketsComponent } from './pages/workshopgarage/greasebuckets/greasebuckets.component';
import { InfraredthermometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/infraredthermometers/infraredthermometers.component';
import { DigitalthermometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/digitalthermometers/digitalthermometers.component';
import { AnaloguekitchenscalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/analoguekitchenscales/analoguekitchenscales.component';
import { HandtoolsMeasuringtapesComponent } from './pages/handtools/category/handtoolsmeasuringtapes/handtoolsmeasuringtapes.component';
import { AllenkeysComponent } from './pages/handtools/category/allenkeys/allenkeys.component';
import { PowertrowelsComponent } from './pages/constructionequipment/powertrowels/powertrowels.component';
import { BrushcuttersaccessoriesComponent } from './pages/cleaningandgardensupplies/brushcutters/brushcuttersaccessories/brushcuttersaccessoriescomponent';
import { FallarrestersComponent } from './pages/constructionequipment/fallarresters/fallarresters.component';
import { HydraulicshoppressComponent } from './pages/workshopgarage/hydraulicshoppress/hydraulicshoppress.component';
import { MitresawsComponent } from './pages/powertools/bycategories/saws/mitresaws/mitresaws.component';
import { UmbrellasComponent } from './pages/ppe/bycategory/clothing/umbrellas/umbrellas.component';
import { ElectricimpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/electricimpactwrenches/electricimpactwrenches.component';
import { HandsawsComponent } from './pages/handtools/category/handsaws/handsaws.component';
import { GetAQuoteComponent } from './pages/get-a-quote/get-a-quote.component';
import { BulkordersComponent } from './pages/bulkorders/bulkorders.component';
import { ShoppingcartComponent } from './pages/shops/shoppingcart/shoppingcart.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { DredgepipefloatersComponent } from './pages/marineandoffshore/dredgepipefloaters/dredgepipefloaters.component';
import { LifebuoysComponent } from './pages/marineandoffshore/lifebuoys/lifebuoys.component';
import { LifejacketsComponent } from './pages/marineandoffshore/lifejackets/lifejackets.component';
import { LifevestsComponent } from './pages/marineandoffshore/lifevests/lifevests.component';
import { MarinesafetyequipmentsComponent } from './pages/marineandoffshore/marinesafetyequipments/marinesafetyequipments.component';
import { CablerampsComponent } from './pages/fireandtrafficsafety/trafficsafety/cableramps/cableramps.component';
import { TrafficcontrolsystemsComponent } from './pages/fireandtrafficsafety/trafficsafety/trafficcontrolsystems/trafficcontrolsystems.component';
import { EmergencyalertsystemsComponent } from './pages/fireandtrafficsafety/firesafety/emergencyalertsystems/emergencyalertsystems.component';
import { TapesandadhesivesComponent } from './pages/ppe/bycategory/tapesandadhesives/tapesandadhesives.component';
import { CordlessanglegrindersComponent } from './pages/powertools/bycategories/grinders/anglegrinders/cordlessanglegrinders/cordlessanglegrinders.component';
import { ElectricanglegrindersComponent } from './pages/powertools/bycategories/grinders/anglegrinders/electricanglegrinders/electricanglegrinders.component';
import { PressurekitsComponent } from './pages/workshopgarage/pressurekits/pressurekits.component';
import { LubricantsComponent } from './pages/lubricantschemicalandprotectivesprayer/lubricants/lubricants.component';
import { PaintsprayerComponent } from './pages/lubricantschemicalandprotectivesprayer/paintsprayer/paintsprayer.component';
import { ChemicalapplicationsandsprayerComponent } from './pages/lubricantschemicalandprotectivesprayer/chemicalapplicationsandsprayer/chemicalapplicationsandsprayer.component';
import { VibratorsComponent } from './pages/powertools/bycategories/vibrators/vibrators.component';
import { EarthaugersComponent } from './pages/powertools/bycategories/drills/earthaugers/earthaugers.component';
import { ElectricrotaryhammerdrillsComponent } from './pages/powertools/bycategories/drills/rotaryhammerdrills/electricrotaryhammerdrills/electricrotaryhammerdrills.component';
import { CordlessrotaryhammerdrillsComponent } from './pages/powertools/bycategories/drills/rotaryhammerdrills/cordlessrotaryhammerdrills/cordlessrotaryhammerdrills.component';
import { StaplegunComponent } from './pages/handtools/category/staplegun/staplegun.component';
import { TapanddieComponent } from './pages/handtools/category/tapanddie/tapanddie.component';
import { AircompressoraccessoriesComponent } from './pages/workshopgarage/aircompressoraccessories/aircompressoraccessories.component';
import { AdhesivetapesComponent } from './pages/sealantadhesive/adhesivetapes/adhesivetapes.component';
import { ColdroomwearsComponent } from './pages/ppe/bycategory/clothing/coldroomwears/coldroomwears.component';
import { SafetysignsComponent } from './pages/ppe/bycategory/safetysigns/safetysigns.component';
import { HeadlampsComponent } from './pages/ppe/bycategory/headlamps/headlamps.component';
import { GpstrackerComponent } from './pages/measuringandtesting/generalmeasuringinstruments/gpstracker/gpstracker.component';
import { HandgreasegunsComponent } from './pages/handtools/category/handgreaseguns/handgreaseguns.component';
import { WeldingprotectionwearsComponent } from './pages/ppe/bycategory/clothing/weldingprotectionwears/weldingprotectionwears.component';
import { MediajacketsComponent } from './pages/ppe/bycategory/clothing/mediajackets/mediajackets.component';
import { AgrochemicalsComponent } from './pages/farmequipments/agrochemicals/agrochemicals.component';
import { KnapsacksprayersComponent } from './pages/farmequipments/knapsacksprayers/knapsacksprayers.component';
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
import { HolesawsComponent } from './pages/handtools/category/holesaws/holesaws.component';
import { RouterbitsComponent } from './pages/handtools/category/handtoolsaccessories/routerbits/routerbits.component';
import { CorecuttersandbitsComponent } from './pages/handtools/category/handtoolsaccessories/corecuttersandbits/corecuttersandbits.component';
import { ThicknessguagesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/thicknessguages/thicknessguages.component';
import { GardensprinklersComponent } from './pages/cleaningandgardensupplies/gardensprinklers/gardensprinklers.component';
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
import { ElectricpipebendersComponent } from './pages/powertools/bycategories/electricpipebenders/electricpipebenders.component';
import { PipebendersComponent } from './pages/handtools/category/pipebenders/pipebenders.component';
import { TorquewrenchesComponent } from './pages/handtools/category/torquewrenches/torquewrenches.component';
import { LockoutstationsComponent } from './pages/ppe/bycategory/lockoutstations/lockoutstations.component';
import { GardentoolsComponent } from './pages/cleaningandgardensupplies/gardentools/gardentools.component';
import { AirlesssprayersComponent } from './pages/powertools/bycategories/airlesssprayers/airlesssprayers.component';
import { HosereelsComponent } from './pages/cleaningandgardensupplies/hose/hosereels/hosereels.component';
import { HydraulichoseComponent } from './pages/cleaningandgardensupplies/hose/hydraulichose/hydraulichose.component';
import { ConcretepumpsComponent } from './pages/constructionequipment/concretepumps/concretepumps.component';
import { DrumrollercompactorsComponent } from './pages/constructionequipment/drumrollercompactors/drumrollercompactors.component';
import { RoadmarkingmachinesComponent } from './pages/constructionequipment/roadmarkingmachines/roadmarkingmachines.component';
import { ElectricalcablepullersComponent } from './pages/powertools/bycategories/electricalcablepullers/electricalcablepullers.component';
import { ElectricalcablecuttersComponent } from './pages/powertools/bycategories/electricalcablecutters/electricalcablecutters.component';
import { ConcretescreedersComponent } from './pages/constructionequipment/concretescreeders/concretescreeders.component';
import { SteamcleanermachinesComponent, } from './pages/cleaningandgardensupplies/steamecleanermachines/steamcleanermachines.component';
import { PlasteringtoolsComponent } from './pages/handtools/category/plasteringtools/plasteringtools.component';
import { ScaleaccessoriesComponent } from './pages/measuringandtesting/measuringscales/scaleaccessories/scaleaccessories.component';
import { HandgearwinchesComponent } from './pages/handtools/category/handgearwinches/handgearwinches.component';
import { GeneralconcreteequipmentComponent } from './pages/constructionequipment/generalconcreteequipment/generalconcreteequipment.component';
import { GasolinejackhammersComponent } from './pages/powertools/bycategories/jackhammers/gasolinejackhammers/gasolinejackhammers.component';
import { DippingtapeComponent } from './pages/measuringandtesting/generalmeasuringinstruments/dippingtape/dippingtape.component';







const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "index", component: HomeComponent },
  { path: "dash", component: DashboardComponent },
  { path: "search-results", component: SearchResultsComponent },
  { path: "shopcategories", component: ShopcategoriesComponent },
  { path: 'product/:id', component: ProductdetailsComponent },
  { path: "productcheckout", component: ProductcheckoutComponent },
  { path: "pages", component: PagesComponent },
  { path: "searchbar", component: SearchBarComponent },
  { path: "login", component: LoginComponent },
  // { path: "trackorder", component: TrackorderComponent },
  { path: "faq", component: FaqComponent },
  { path: "whishlist", component: WishlistComponent },
  { path: "compare", component: CompareComponent },
  { path: "termsandconditions", component: TermsandconditionsComponent },
  { path: "privacypolicy", component: PrivacypolicyComponent },
  { path: "deliverypolicy", component: DeliverypolicyComponent },
  { path: "warrantyandreturns", component: WarrantyandreturnsComponent },
  { path: "confirmation", component: ConfirmationComponent },
  { path: "shoppingcart", component: ShoppingcartComponent },
  { path: "contact", component: ContactComponent },
  { path: "get-a-quote", component: GetAQuoteComponent },
  { path: "blog", component: BlogComponent },
  { path: "pagesinfo", component: PagesinfoComponent },
  { path: "blogdetails", component: BlogdetailsComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "pagination", component: PaginationComponent },
  { path: "bulkorders", component: BulkordersComponent },
  // ppe
  { path: "ppe", component: PPeComponent },
  // bybrands
  { path: "bybrands", component: BybrandsComponent },
  { path: "beta", component: BetaComponent },
  { path: "dickies", component: DickiesComponent },
  { path: "portwest", component: PortwestComponent },
  { path: "redwings", component: RedwingsComponent },
  { path: "supersteel", component: SupersteelComponent },
  { path: "safetyjogger", component: SafetyjoggersComponent },
  { path: "threem", component: ThreeMComponent },
  { path: "msa", component: MsaComponent },
  { path: "uvex", component: UvexComponent },

  //  Bycategory
  { path: "bycategory", component: BycategoryComponent },
  { path: "clothing", component: SupersteelComponent },
  { path: "disposables", component: DisposablesComponent },
  { path: "coveralls", component: CoverallsComponent },
  { path: "fireresistantwears", component: FireresistantwearsComponent },
  { path: "labcoats", component: LabcoatsComponent },
  { path: "chemicalwears", component: ChemicalwearsComponent },
  { path: "reflectivevests", component: ReflectivevestsComponent },
  { path: "umbrellas", component: UmbrellasComponent },
  { path: "emergencyeyewash", component: EmergencyeyewashComponent },
  { path: "fallarrestors", component: FallarrestorsComponent },
  { path: "flashlights", component: FlashlightsComponent },
  { path: "gasdetectors", component: GasdetectorsComponent },
  { path: "handgloves", component: HandglovesComponent },
  { path: "headprotections", component: HeadprotectionsComponent },
  { path: "flashlights", component: FlashlightsComponent },
  { path: "bumpcaps", component: BumpcapsComponent },
  { path: "faceshields", component: FaceshieldsComponent },
  { path: "safetyhelmets", component: SafetyhelmetsComponent },
  { path: "weldinghelmets", component: WeldinghelmetsComponent },
  { path: "respiratoryandhearings", component: RespiratoryandhearingComponent },
  { path: "earmuffs", component: EarmuffsComponent },
  { path: "earplugs", component: EarplugsComponent },
  { path: "nosemasks", component: NosemasksComponent },
  { path: "safetyboots", component: SafetybootsComponent },
  { path: "breathingapparatus", component: BreathingapparatusComponent },
  { path: "safetyeyegoogles", component: SafetygooglesComponent },
  { path: "safetyharnessandlanyards", component: SafetyharnessandlanyardsComponent },
  { path: "safetyhelmets", component: SafetyhelmetsComponent },
  { path: "safetyshoes", component: SafetyshoesComponent },
  { path: "coldroomwears", component: ColdroomwearsComponent },
  { path: "lockoutstations", component: LockoutstationsComponent },
  { path: "tapesandadhesives", component: TapesandadhesivesComponent },
  { path: "mediajackets", component: MediajacketsComponent },
  { path: "safetysigns", component: SafetysignsComponent },
  { path: "spillkits", component: SpillkitsComponent },
  { path: "weldingprotectionwears", component: WeldingprotectionwearsComponent },
  { path: "headlamps", component: HeadlampsComponent },
  { path: "firstaids", component: FirstaidsComponent },
  { path: 'safetyrainwears', component: SafetyrainwearsComponent },
  { path: "securityandsurveillance", component: SecurityandsurveillanceComponent },
  { path: "securitygears", component: SecuritygearsComponent },
  { path: "personalsafety", component: PersonalsafetyComponent },
  { path: "stanchions", component: StanchionsComponent },
  { path: "walkietalkies", component: WalkietalkiesComponent },

  // powertools
  { path: "powertools", component: PowertoolsComponent },
  { path: "bybrands", component: BybrandsComponent },
  { path: "bosch", component: BoschComponent },
  { path: "ingco", component: IngcoComponent },
  { path: "makita", component: MakitaComponent },
  { path: "maxmech", component: MaxmechComponent },
  { path: "stanley", component: StanleyComponent },
  { path: "total", component: TotalComponent },
  { path: "dewalt", component: DewaltComponent },
  { path: "edon", component: EdonComponent },



  // Bycategory
  { path: "cuttingmachines", component: CuttingmachinesComponent },
  { path: "drills", component: DrillsComponent },
  { path: "cordeddrills", component: CordeddrillsComponent },
  { path: 'shoppress', component: ShoppressComponent },
  { path: "cordlessdrillsanddrivers", component: CordlessdrillsanddriversComponent },
  { path: "coredrills", component: CoredrillsComponent },
  { path: "magneticdrills", component: MagneticdrillsComponent },
  { path: "drillpresses", component: DrillpressesComponent },
  { path: "blowers", component: BlowersComponent },
  { path: "cordlessblowers", component: CordlessblowersComponent },
  { path: "electricblowers", component: ElectricblowersComponent },
  { path: "gasolineblowers", component: GasolineblowersComponent },
  { path: "rotaryhammerdrills", component: RotaryhammerdrillsComponent },
  { path: "electricalrotaryhammerdrills", component: ElectricrotaryhammerdrillsComponent },
  { path: "cordlessrotaryhammerdrills", component: CordlessrotaryhammerdrillsComponent },
  { path: "earthaugers", component: EarthaugersComponent },
  { path: "grinders", component: GrindersComponent },
  { path: "anglegrinders", component: AnglegrindersComponent },
  { path: "cordlessanglegrinders", component: CordlessanglegrindersComponent },
  { path: "electricanglegrinders", component: ElectricanglegrindersComponent },
  { path: "benchgrinders", component: BenchgrindersComponent },
  { path: "combokits", component: CombokitsComponent },
  { path: "dieandminigrinders", component: DieandminigrindersComponent },
  { path: "powercrimpingtools", component: PowercrimpingtoolsComponent },
  { path: "handmixers", component: MixersComponent },
  { path: "impactwrenches", component: ImpactwrenchesComponent },
  { path: "heatguns", component: HeatgunsComponent },
  { path: "cordlessimpactwrenches", component: CordlessimpactwrenchesComponent },
  { path: "electricimpactwrenches", component: ElectricimpactwrenchesComponent },
  { path: "pneumaticimpactwrenches", component: PnuematicimpactwrenchesComponent },
  { path: "sanders", component: SandersComponent },
  { path: "polishers", component: PolishersComponent },
  { path: "vibrators", component: VibratorsComponent },
  { path: "saws", component: SawsComponent },
  { path: "bagclosermachines", component: BagclosermachinesComponent },
  { path: "planers", component: PlanersComponent },
  { path: "edgebindingmachines", component: EdgebandingmachinesComponent },
  { path: "generalguntools", component: GeneralguntoolsComponent },
  { path: "impulsesealers", component: ImpulsesealersComponent },
  { path: "nailers", component: NailersComponent },
  { path: "pprandthreadingmachines", component: PprandthreadingmachinesComponent },
  { path: "wallchasers", component: WallchasersComponent },
  { path: "routers", component: RoutersComponent },
  { path: "sprayguns", component: SpraygunsComponent },
  { path: "bandsaws", component: BandsawsComponent },
  { path: "chainsaws", component: ChainsawsComponent },
  { path: "trimmers", component: TrimmersComponent },
  { path: "generalguntools", component: GeneralguntoolsComponent },
  { path: "planers", component: PlanersComponent },
  { path: "jackhammers", component: JackhammersComponent },
  { path: "demolitionbreakers", component: DemolitionbreakersComponent },
  { path: "pneumaticjackhammers", component: PneumaticjackhammersComponent },
  { path: "circularsaws", component: CircularsawsComponent },
  { path: "jigsaws", component: JigsawsComponent },
  { path: "mitresaws", component: MitresawsComponent },
  { path: "tablesaws", component: TablesawsComponent },
  { path: "glueguns", component: GluegunsComponent },
  { path: "reciprocatingsaws", component: ReciprocatingsawsComponent },
  { path: "cutoffsaws", component: CutoffsawsComponent },
  { path: "electricpipebenders", component: ElectricpipebendersComponent },
  { path: "airlesssprayers", component: AirlesssprayersComponent },
  { path: "electricalcablepullers", component: ElectricalcablepullersComponent },
  { path: "electricalcablecutters", component: ElectricalcablecuttersComponent },
   { path: "gasolinejackhammers", component:GasolinejackhammersComponent },



  // sealantadhesive
  { path: "sealantadhesive", component: SealantadhesiveComponent },
  { path: "constructionadhesives", component: ConstructionadhesivesComponent },
  { path: "epoxyadhesives", component: EpoxyadhesivesComponent },
  { path: "pufoamsealants", component: PufoamsealantsComponent },
  { path: "siliconesealants", component: SiliconesealantsComponent },
  { path: "tilesadhesives", component: TilesadhesivesComponent },
  { path: "glues", component: GluesComponent },
  { path: "gums", component: GumsComponent },
  { path: "contactadhesives", component: ContactadhesivesComponent },
  { path: "leakfillers", component: LeakfillersComponent },
  { path: "waterproofsealants", component: WaterproofsealantsComponent },
  { path: "adhesivetapes", component: AdhesivetapesComponent },
  { path: "caulkingfoamguns", component: CaulkingandpufoamgunsComponent },

  // Lubricants chemical and protectivesprayersComponent
  { path: "chemicalapplicationsandsprayers", component: ChemicalapplicationsandsprayerComponent },
  { path: "lubricants", component: LubricantsComponent },
  { path: "spraypaints", component: PaintsprayerComponent },


  // marine and off shore
  { path: "dredgepipefloaters", component: DredgepipefloatersComponent },
  { path: "lifebuoys", component: LifebuoysComponent },
  { path: "lifejackets", component: LifejacketsComponent },
  { path: "lifevests", component: LifevestsComponent },
  { path: "marinesafetyequipments", component: MarinesafetyequipmentsComponent },

  //  safety&traffic
  //  Fire safety
  { path: "firesafety", component: FiresafetyComponent },
  { path: "fireblankets", component: FireblanketsComponent },
  { path: "fireextinguishers", component: FireextinguishersComponent },
  { path: "smokeandfirealarms", component: SmokeFirealarmsComponent },
  { path: "firehose", component: FirehoseComponent },
  { path: "firehosecabinet", component: FirehosecabinetComponent },
  { path: "emergencyalertsystems", component: EmergencyalertsystemsComponent },
  // traffic safety
  { path: "cautiontapes", component: CautiontapesComponent },
  { path: "roadbarriers", component: RoadbarriersComponent },
  { path: "safetyvests", component: SafetyvestsComponent },
  { path: "speedbumps", component: SpeedbumpsComponent },
  { path: "trafficcones", component: TrafficconesComponent },
  { path: "warningsigns", component: WarningsignsComponent },
  { path: "wheelchokes", component: WheelchocksComponent },
  { path: "cableramps", component: CablerampsComponent },
  { path: "trafficcontrolsystems", component: TrafficcontrolsystemsComponent },
  { path: "inspectionmirrors", component: InspectionmirrorsComponent },
  { path: "convexmirrors", component: ConvexmirrorsComponent },
  { path: "metaldetectors", component: MetaldetectorsComponent },
  { path: "reflectors", component: ReflectorsComponent },
  { path: "wheelchocks", component: WheelchocksComponent },
  { path: "trafficandsolarlights", component: TrafficandsolarlightsComponent },





  // WorkshopGarage
  { path: "workshopgarage", component: WorkshopgarageComponent },
  { path: "aircompressors", component: AircompressorsComponent },
  { path: "enginesandmotors", component: EnginesandmotorsComponent },
  { path: "aircompressoraccessories", component: AircompressoraccessoriesComponent },
  { path: "powerextensionandreels", component: PowerextensionandreelsComponent },
  { path: "toolscabinets", component: ToolscabinetComponent },
  { path: "toolsets", component: ToolssetComponent },
  { path: "workbenchvices", component: WorkbenchesComponent },
  { path: "greasebuckets", component: GreasebucketsComponent },
  { path: "carcreepers", component: CarcreepersComponent },
  { path: "rotarypumps", component: RotarypumpsComponent },
  { path: "testingbuckets", component: TestingbucketsComponent },
  { path: "hydraulicshoppress", component: HydraulicshoppressComponent },
  { path: "pressurekits", component: PressurekitsComponent },
  { path: "hydraulicpumps", component: HydraulicpumpsComponent },
  { path: "generalautomotivetools", component: GeneralautomotivetoolsComponent },
  { path: "oilextractorsanddrainers", component: OilextractorsanddrainersComponent },

  { path: "lifting", component: LiftingComponent },
  { path: "drumhandlingequipments", component: DrumhandlingequimentsComponent },
  { path: "enginecranes", component: EnginecranesComponent },
  { path: "jackandlifts", component: JackandliftsComponent },
  { path: "liftingbelts", component: LiftingbeltsComponent },
  { path: "verticalclamps", component: VericaclampComponent },
  { path: "palletetrucks", component: PalletetrucksComponent },
  { path: "palletestackers", component: PalletstackersComponent },
  { path: "trolleys", component: TrolleysComponent },
  { path: "chainblocksandhoists", component: ChainblocksandhoistsComponent },
  { path: "workbenches", component: WorkbenchesComponent },
  { path: "wheeelserviceequipment", component: WheelserviceequipmentComponent },
  { path: "tirechangers", component: TirechangesComponent },
  { path: "wheelalignmentguages", component: WheelalignmentguagesComponent },
  { path: "wheelchock", component: WheelchocksComponent },
  { path: "wheellocks", component: WheellocksComponent },
  { path: "wheelbalancers", component: WheelbalancersComponent },



  // ladder
  { path: "ladders", component: LaddersComponent },
  { path: "extensionladders", component: ExtensionladdersComponent },
  { path: "foldingladders", component: FoldingladdersComponent },
  { path: "stepladders", component: StepladdersComponent },



  // Electricalequipments
  { path: "electricalequipments", component: ElectricalequipmentsComponent },
  { path: "autoaircompressors", component: AutoaircompressorsComponent },
  { path: "aircompressors", component: AircompressorsComponent },
  { path: "batteries", component: BatteriesComponent },
  { path: "batterychargers", component: BatterychargersComponent },
  { path: "jumperstarters", component: JumperstartersComponent },
  { path: "extensioncablewires", component: ExtensioncablewiresComponent },
  { path: "generators", component: GeneratorsComponent },
  { path: "desielgenerators", component: DesielgeneratorsComponent },
  { path: "invertergenerators", component: InvertergeneratorsComponent },
  { path: "petrolgenerators", component: PetrolgeneratorsComponent },
  { path: "plasmacutters", component: PlasmacuttersComponent },
  { path: "cablewireandboosters", component: CablewiresandboostersComponent },
  { path: "weldingmachines", component: WeldingmachinesComponent },
  { path: "solderingequipment", component: SolderingequipmentComponent },
  { path: "migweldingmachines", component: MigweldingmachinesComponent },
  { path: "mmaweldingmachines", component: MmaweldingmachinesComponent },
  { path: "tigweldingmachines", component: TigweldingmachinesComponent },
  { path: "weldingaccessories", component: WeldingaccessoriesComponent },
  { path: "arcweldingmachines", component: ArcweldingmachinesComponent },

  // Measuringandtesting
  { path: "measuringandtesting", component: MeasuringandtestingComponent },

  // Fueltestingandmeasuring
  { path: "fueltestingandmeasuring", component: FueltestingandmeasuringComponent },
  { path: "fueltestingkits", component: FueltestingkitsComponent },
  { path: "flowmeters", component: FlowmetersComponent },
  { path: "hydrometers", component: HydrometersComponent },
  { path: "measuringcans", component: MeasuringcansComponent },
  { path: "measuringcylinders", component: MeasuringcylindersComponent },
  { path: "testingpaste", component: TestingpasteComponent },
  { path: "thermometers", component: ThermometersComponent },


  //  GeneralmeasuringinstrumentsComponent
  { path: "generalmeasuring", component: GeneralmeasuringinstrumentsComponent },
  { path: "clampmeters", component: ClampmetersComponent },
  { path: "batterytesters", component: BatterytestersComponent },
  { path: "calipers", component: CalipersComponent },
  { path: "digitalcalipers", component: DigitalcalipersComponent },
  { path: "gpstrackers", component: GpstrackerComponent },
  { path: "verniercalipers", component: VerniercalipersComponent },
  { path: "measuringtapes", component: MeasuringtapesComponent },
  { path: "measuringwheels", component: MeasuringwheelsComponent },
  { path: "generalmeasuringtools", component: GeneralmeasuringinstrumentsComponent },
  { path: "digitalmultimeters", component: MultimetersComponent },
  { path: "micrometers", component: MicrometersComponent },
  { path: "thicknessgauges", component: ThicknessguagesComponent },
  { path: "scannersanddetectors", component: ScannersanddectorsComponent },
  { path: "analoguemicrometers", component: AnaloguemicrometersComponent },
  { path: "digitalmicrometers", component: DigitalmicrometersComponent },
  { path: "dialindicators", component: DialindicatorsComponent },
  { path: "generalgauges", component: GeneralguagesComponent },
  { path: "laserdistancemeters", component: LaserdistancemetersComponent },
  { path: "generalmeters", component: GeneralMetersComponent },
  { path: "generaltesters", component: GeneralTestersComponent },
  { path: "waterandlabtesters", component: WaterandlabtestersComponent },
  { path: "alcoholtesters", component: AlcoholtestersComponent },
  { path: "concretetesters", component: ConcretetestersComponent },
  { path: "moisturetesters", component: MoisturetestersComponent },
  { path: "moistureanalyzers", component: MoistureanalyzersComponent },
  { path: "phmeters", component: PhmetersComponent },
  { path: "testingbuckets", component: TestingbucketsComponent },
  { path: "watertesters", component: WatertestersComponent },
  { path: "infraredthermometers", component: InfraredthermometersComponent },
  { path: "digitalthermometers", component: DigitalthermometersComponent },
  { path: "dialboregauges", component: DialboreguagesComponent },
  { path: "centrifuges", component: CentrifugesComponent },
  { path: "gasanalyzers", component: GasanalyzersComponent },
  { path: "dippingtape", component: DippingtapeComponent },

  // meaasuring scales 
  { path: "measuringscales", component: MeasuringscalesComponent },
  { path: "analoguescales", component: AnaloguescalesComponent },
  { path: "beambalances", component: BeambalancesComponent },
  { path: "mechanicalplatformscales", component: MechanicalplatformscalesComponent },
  { path: "springbalances", component: SpringbalancesComponent },
  { path: "analoguekitchenscales", component: AnaloguekitchenscalesComponent },
  { path: "digitalscalers", component: DigitalscalesComponent },
  { path: "analyticalbalances", component: AnalyticalbalancesComponent },
  { path: "platformscales", component: PlatformscalesComponent },
  { path: "bathroomscales", component: BathroomscalesComponent },
  { path: "cranescales", component: CranesComponent },
  { path: "hangingscales", component: HangingscalesComponent },
  { path: "kitchenscales", component: KitchenscalesComponent },
  { path: "pocketscales", component: PocketscalesComponent },
  { path: "pricingscales", component: PricingscalesComponent },
  { path: "weighbridges", component: WeighbridgesComponent },
  { path: "scaleaccessories", component: ScaleaccessoriesComponent },

  // levelingtools
  { path: "leveltools", component: LeveltoolsComponent },
  { path: "dumpylevels", component: DumpinglevelsComponent },
  { path: "laserlevels", component: LaserlevelsComponent },
  { path: "spiritlevels", component: SpiritlevelsComponent },
  { path: "surveytripods", component: SurveytripodsComponent },
  { path: "laserdistancemeters", component: LaserdistancemetersComponent },
  { path: "surveyinstruments", component: SurveyinstrumentsComponent },




  // Handtoolsaccessories
  { path: "handtoolsandaccessories", component: HandtoolsaccessoriesComponent },
  //  Bycategory
  { path: "category", component: CategoryComponent },
  { path: "chieselsandpunches", component: ChiselsandpunchesComponent },
  { path: "crimpingtools", component: CrimpingtoolsComponent },
  { path: "suctioncups", component: SuctioncupsComponent },
  { path: "pipethreaders", component: PipethreadersComponent },
  { path: "generaldrivers", component: DriversComponent },
  { path: "flaringtools", component: FlaringtoolsComponent },
  { path: "hammersandmallets", component: HammersandmalletsComponent },
  { path: "tapanddie", component: TapanddieComponent },
  { path: "handriveters", component: HandrivetersComponent },
  { path: "airnailguns", component: AirnailgunsComponent },
  { path: "pliersandcutters", component: PliersandcuttersComponent },
  { path: "screwdrivers", component: ScrewdriversComponent },
  { path: "cablepullersandfishtapes", component: CablepullersandfishtapesComponent },
  { path: "socketsandracthets", component: SocketsandratchetsComponent },
  { path: 'chiselsandpunches', component: ChiselsandpunchesComponent },
  { path: "spannersandwrenches", component: SpannersandwrenchesComponent },
  { path: "tilecutters", component: TilescutterComponent },
  { path: "handsaws", component: HandsawsComponent },
  { path: "doorhardware", component: DoorhardwaresComponent },
  { path: "bearingpullers", component: BearingpullersComponent },
  { path: "measuringtapes", component: HandtoolsMeasuringtapesComponent },
  { path: "toolbags", component: ToolsbagsComponent },
  { path: "stapleguns", component: StaplegunComponent },
  { path: "holesaws", component: HolesawsComponent },
  { path: "routerbits", component: RouterbitsComponent },
  { path: "corecuttersandbits", component: CorecuttersandbitsComponent },
  { path: "toolboxes", component: ToolboxesComponent },
  { path: "utilityknivesandblades", component: UtilityknivesandbladesComponent },
  { path: "puttyknife", component: PuttyknifeComponent },
  { path: "handtoolsaccesories", component: HandtoolsaccessoriesComponent },
  { path: "cuttingandgrindingdiscs", component: CuttingandgrindingdiscComponent },
  { path: "drillbits", component: DrillbitsComponent },
  { path: "polishingpadsandbuffers", component: PolishingpadsandbuffersComponent },
  { path: "sandingpads", component: SandingpadsComponent },
  { path: "grindingstonesandwheels", component: GrindingstonesandwheelsComponent },
  { path: "sawblades", component: SawbladesComponent },
  { path: "screwdriverbits", component: ScrewdriverbitsComponent },
  { path: "toolssets", component: ToolssetComponent },
  { path: "allenkeys", component: AllenkeysComponent },
  { path: "handgreaseguns", component: HandgreasegunsComponent },
  { path: "airblowguns", component: AirblowgunsComponent },
  { path: "pipecutters", component: PipecuttersComponent },
  { path: "cablecutters", component: CablecuttersComponent },
  { path: "pipebenders", component: PipebendersComponent },
  { path: "torquewrenches", component: TorquewrenchesComponent },
  { path: "manualsprayguns", component: ManualspraygunsComponent },
  { path: "plasteringtools", component: PlasteringtoolsComponent },
  { path: "handgearwinches", component:HandgearwinchesComponent },

  //  Bybrands
  { path: "bybrands", component: BybrandsComponent },
  { path: "bosch", component: BoschComponent },
  { path: "ingco", component: IngcoComponent },
  { path: "makita", component: MakitaComponent },
  { path: "maxmech", component: MaxmechComponent },
  { path: "stanley", component: StanleyComponent },
  { path: "total", component: TotalComponent },


  // Constructionequipment
  { path: "constructionequipment", component: ConstructionequipmentComponent },
  { path: "platecompactors", component: CompactorsComponent },
  { path: "concretevibrators", component: ConcretevibratorsComponent },
  { path: "constructionsafetygear", component: ConstructionsafetygearComponent },
  { path: "fallarresters", component: FallarrestersComponent },
  { path: "pokerhoses", component: PokerhosesComponent },
  { path: "concretepumps", component: ConcretepumpsComponent },
  { path: "powertrowels", component: PowertrowelsComponent },
  { path: "jumpingrammers", component: JumpingrammersComponent },
  { path: "rebarmachines", component: RebarmachinesComponent },
  { path: "wheelbarrows", component: WheelbarrowsComponent },
  { path: "concretemixers", component: ConcretemixersComponent },
  { path: "drumtrucks", component: DrumtrucksComponent },
  { path: "testingequipment", component: TestingequipmentComponent },
  { path: "drumrollercompactors", component: DrumrollercompactorsComponent },
  { path: "roadmarkingmachines", component: RoadmarkingmachinesComponent },
  { path: "concretescreeders", component: ConcretescreedersComponent },
  { path: "generalconcreteequipment", component:GeneralconcreteequipmentComponent },

  // Pumpingmachines

  { path: "pumpingmachines", component: PumpingmachinesComponent },
  { path: "fueltransferpumps", component: FueltransferpumpsComponent },
  { path: "pressurepumps", component: PressurepumpsComponent },
  { path: "rotarypumps", component: RotarypumpsComponent },
  { path: "submersiblepumps", component: SubmersiblepumpsComponent },
  { path: "waterpumps", component: WaterpumpsComponent },
  { path: "vacuumpumps", component: VacuumpumpsComponent },



  //  Cleaningandgardensupplies

  { path: "cleaniningandgardensupplies", component: CleaningandgardensuppliesComponent },

  //  Bybrands
  { path: "bybrands", component: BybrandsComponent },
  { path: "bosch", component: BoschComponent },
  { path: "ingco", component: IngcoComponent },
  { path: "maxmech", component: MaxmechComponent },
  { path: "total", component: TotalComponent },

  //  Brushcutters
  { path: "brushcutters", component: BrushcuttersComponent },
  { path: "brushcutteraccessories", component: BrushcuttersaccessoriesComponent },

  //  Bycategory
  { path: "cordlessbrushcutters", component: CordlessbruschcuttersComponent },
  { path: "gasolinebrushcutters", component: GasolinebrushcuttersComponent },
  { path: "brushcuters", component: BrushcuttersaccessoriesComponent },

  //  Bybrands
  { path: "bybrands", component: BybrandsComponent },
  { path: "ingco", component: IngcoComponent },
  { path: "maxmech", component: MaxmechComponent },
  { path: "total", component: TotalComponent },


  //  hose
  { path: "hose", component: HoseComponent },
  { path: "hoseaccessories", component: HoseaccessoriesComponent },
  { path: "pressurehose", component: PressurehoseComponent },
  { path: "waterandpumphose", component: WaterandpumphoseComponent },
  { path: "hosereels", component: HosereelsComponent },
  { path: "hydraulichose", component: HydraulichoseComponent },


  //  Lawnmowers
  { path: "lawnmowers", component: LawnmowersComponent },
  { path: "electricandcordlesslawnmowers", component: ElectricandcordlesslawnmowerComponent },
  { path: "gasolinelawnmowers", component: GasolinelawnmowerComponent },
  // Bybrands
  { path: "ingco", component: IngcoComponent },
  { path: "princegarden", component: PrincegardenComponent },
  { path: "total", component: TotalComponent },

  { path: "scrubbersandsweepers", component: ScrubbersandsweepersComponent },
  { path: "cleaningaccessories", component: CleaningaccessoriesComponent },
  { path: "gardensprinklers", component: GardensprinklersComponent },
  { path: "gardentools", component: GardentoolsComponent },
  { path: "steamcleanermachines", component: SteamcleanermachinesComponent },
  // Pressurewashers
  { path: "pressurewashers", component: PressurewashersComponent },
  { path: "pressurewashersaccessories", component: PressurewashersaccessoriesComponent },

  // Bycategory
  { path: "cordlesspressurewashers", component: CordlesspressurewashersComponent },
  { path: "electricpressurewashers", component: ElectricpressurewashersComponent },
  { path: "industrialpressurewashers", component: IndustrialpressurewashersComponent },
  { path: "petrolpressurewashers", component: PetrolpressureswashersComponent },


  //  Bybrands
  { path: "bybrands", component: BybrandsComponent },
  { path: "ingco", component: IngcoComponent },
  { path: "maxmech", component: MaxmechComponent },
  { path: "total", component: TotalComponent },
  { path: "karcher", component: KarcherComponent },

  //  Vacuumcleaners
  { path: "vacuumecleaners", component: VacuumcleanersComponent },
  // Bycategory
  { path: "industrialvacuumcleaners", component: IndustrialvacummcleanersComponent },
  { path: "cyclonevacuumcleaners", component: CyclonevacuumcleanersComponent },
  { path: "wetanddryvacuumcleaners", component: WetanddryvacuumcleanersComponent },


  //  Bybrands
  { path: "bybrands", component: BybrandsComponent },
  { path: "ingco", component: IngcoComponent },
  { path: "total", component: TotalComponent },

  //  Farmequipments
  { path: "farmequipments", component: FarmequipmentsComponent },
  { path: "farmtools", component: FarmtoolsComponent },
  { path: "farmmachines", component: FarmmachinesComponent },
  { path: "agrochemicals", component: AgrochemicalsComponent },
  { path: "knapsacksprayers", component: KnapsacksprayersComponent },






















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
