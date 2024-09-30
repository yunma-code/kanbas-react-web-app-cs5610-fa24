import "./index.css";

export default function BootstrapGrids() {
	return(
		<div>
		<h2>Bootstrap</h2>
		<div id="wd-bs-grid-system">
			<h2>Grid system</h2>
			<div className="row">
				<div className="col bg-danger text-white">
					<h3>Left half</h3>
				</div>
				<div className="col bg-primary text-white">
					<h3>Right half</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-4 bg-warning">
					<h3>One thirds</h3>
				</div>
				<div className="col-8 bg-success text-white">
					<h3>Two thirds</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-2 bg-dark text-white">
					<h3>Sidebar</h3>
				</div>
				<div className="col-8 bg-secondary text-white">
					<h3>Main content</h3>
				</div>
				<div className="col-2 bg-info">
					<h3>Sidebar</h3>
				</div>
			</div>
		</div>

		<h2>Wide Browser window shows 4 columns</h2>
		<div id="wd-bs-responsive-grids">
			<h3>Responsive grid system</h3>
			<div className="row">
				<div className="col-12 col-md-6 col-xl-3 
												bg-warning">
					<h3>Column A</h3>
				</div>
				<div className="col-12 col-md-6 col-xl-3 
												bg-primary text-white">
					<h3>Column B</h3>
				</div>
				<div className="col-12 col-md-6 col-xl-3 
												bg-danger text-white">
					<h3>Column C</h3>
				</div>
				<div className="col-12 col-md-6 col-xl-3 
												bg-success text-white">
					<h3>Column D</h3>
				</div>
			</div>
		</div>
		<h2>Moderate width browser window shows 2 columns</h2>
		<div id="wd-bs-responsive-grids">
			<h3>Responsive grid system</h3>
			<div className="row">
				<div className="col-12 col-md-6 col-xl-6 
												bg-warning">
					<h3>Column A</h3>
				</div>
				<div className="col-12 col-md-6 col-xl-6 
												bg-primary text-white">
					<h3>Column B</h3>
				</div>
				<div className="col-12 col-md-6 col-xl-6 
												bg-danger text-white">
					<h3>Column C</h3>
				</div>
				<div className="col-12 col-md-6 col-xl-6
												bg-success text-white">
					<h3>Column D</h3>
				</div>
			</div>
		</div>
		<h2>Thin browser window shows only 1 column</h2>
		<div id="wd-bs-responsive-grids">
			<h3>Responsive grid system</h3>
			<div className="row">
				<div className="col-12 
												bg-warning">
					<h3>Column A</h3>
				</div>
				<div className="col-12 
												bg-primary text-white">
					<h3>Column B</h3>
				</div>
				<div className="col-12 
												bg-danger text-white">
					<h3>Column C</h3>
				</div>
				<div className="col-12 
												bg-success text-white">
					<h3>Column D</h3>
				</div>
			</div>
		</div>
		<div id="wd-bs-responsive-dramatic">
			<h2>Responsive grid system</h2>
			<div className="row">
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-warning">
					<h4>1</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-primary text-white">
					<h4>2</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-danger text-white">
					<h4>3</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-success text-white">
					<h4>4</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-warning">
					<h4>5</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
												bg-primary text-white">
					<h4>6</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-danger text-white">
					<h4>7</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-success text-white">
					<h4>8</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-warning">
					<h4>9</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-primary text-white">
					<h4>10</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-danger text-white">
					<h4>11</h4>
				</div>
				<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
												bg-success text-white">
					<h4>12</h4>
				</div>
			</div>
		</div>
		<h2>Responsive grid system</h2>
		<div className="row">
    <div className="col-2 bg-warning">
        <h4>1</h4>
    </div>
    <div className="col-2 bg-primary text-white">
        <h4>2</h4>
    </div>
    <div className="col-2 bg-danger text-white">
        <h4>3</h4>
    </div>
    <div className="col-2 bg-success text-white">
        <h4>4</h4>
    </div>
    <div className="col-2 bg-warning">
        <h4>5</h4>
    </div>
    <div className="col-2 bg-primary text-white">
        <h4>6</h4>
    </div>
    <div className="col-2 bg-danger text-white">
        <h4>7</h4>
    </div>
    <div className="col-2 bg-success text-white">
        <h4>8</h4>
    </div>
    <div className="col-2 bg-warning">
        <h4>9</h4>
    </div>
    <div className="col-2 bg-primary text-white">
        <h4>10</h4>
    </div>
    <div className="col-2 bg-danger text-white">
        <h4>11</h4>
    </div>
    <div className="col-2 bg-success text-white">
        <h4>12</h4>
    </div>
		<h2>Responsive grid system</h2>
		<div className="row">
    <div className="col-3 bg-warning">
        <h4>1</h4>
    </div>
    <div className="col-3 bg-primary text-white">
        <h4>2</h4>
    </div>
    <div className="col-3 bg-danger text-white">
        <h4>3</h4>
    </div>
    <div className="col-3 bg-success text-white">
        <h4>4</h4>
    </div>
    <div className="col-3 bg-warning">
        <h4>5</h4>
    </div>
    <div className="col-3 bg-primary text-white">
        <h4>6</h4>
    </div>
    <div className="col-3 bg-danger text-white">
        <h4>7</h4>
    </div>
    <div className="col-3 bg-success text-white">
        <h4>8</h4>
    </div>
    <div className="col-3 bg-warning">
        <h4>9</h4>
    </div>
    <div className="col-3 bg-primary text-white">
        <h4>10</h4>
    </div>
    <div className="col-3 bg-danger text-white">
        <h4>11</h4>
    </div>
    <div className="col-3 bg-success text-white">
        <h4>12</h4>
    </div>
</div>
</div>
<h2>Responsive grid system</h2>
		<div className="row">
    <div className="col-4 bg-warning">
        <h4>1</h4>
    </div>
    <div className="col-4 bg-primary text-white">
        <h4>2</h4>
    </div>
    <div className="col-4 bg-danger text-white">
        <h4>3</h4>
    </div>
    <div className="col-4 bg-success text-white">
        <h4>4</h4>
    </div>
    <div className="col-4 bg-warning">
        <h4>5</h4>
    </div>
    <div className="col-4 bg-primary text-white">
        <h4>6</h4>
    </div>
    <div className="col-4 bg-danger text-white">
        <h4>7</h4>
    </div>
    <div className="col-4 bg-success text-white">
        <h4>8</h4>
    </div>
    <div className="col-4 bg-warning">
        <h4>9</h4>
    </div>
    <div className="col-4 bg-primary text-white">
        <h4>10</h4>
    </div>
    <div className="col-4 bg-danger text-white">
        <h4>11</h4>
    </div>
    <div className="col-4 bg-success text-white">
        <h4>12</h4>
    </div>
</div>
<h2>Responsive grid system</h2>
		<div className="row">
    <div className="col-6 bg-warning">
        <h4>1</h4>
    </div>
    <div className="col-6 bg-primary text-white">
        <h4>2</h4>
    </div>
    <div className="col-6 bg-danger text-white">
        <h4>3</h4>
    </div>
    <div className="col-6 bg-success text-white">
        <h4>4</h4>
    </div>
    <div className="col-6 bg-warning">
        <h4>5</h4>
    </div>
    <div className="col-6 bg-primary text-white">
        <h4>6</h4>
    </div>
    <div className="col-6 bg-danger text-white">
        <h4>7</h4>
    </div>
    <div className="col-6 bg-success text-white">
        <h4>8</h4>
    </div>
    <div className="col-6 bg-warning">
        <h4>9</h4>
    </div>
    <div className="col-6 bg-primary text-white">
        <h4>10</h4>
    </div>
    <div className="col-6 bg-danger text-white">
        <h4>11</h4>
    </div>
    <div className="col-6 bg-success text-white">
        <h4>12</h4>
    </div>
</div>
<h2>Responsive grid system</h2>
		<div className="row">
    <div className="col-12 bg-warning">
        <h4>1</h4>
    </div>
    <div className="col-12 bg-primary text-white">
        <h4>2</h4>
    </div>
    <div className="col-12 bg-danger text-white">
        <h4>3</h4>
    </div>
    <div className="col-12 bg-success text-white">
        <h4>4</h4>
    </div>
    <div className="col-12 bg-warning">
        <h4>5</h4>
    </div>
    <div className="col-12 bg-primary text-white">
        <h4>6</h4>
    </div>
    <div className="col-12 bg-danger text-white">
        <h4>7</h4>
    </div>
    <div className="col-12 bg-success text-white">
        <h4>8</h4>
    </div>
    <div className="col-12 bg-warning">
        <h4>9</h4>
    </div>
    <div className="col-12 bg-primary text-white">
        <h4>10</h4>
    </div>
    <div className="col-12 bg-danger text-white">
        <h4>11</h4>
    </div>
    <div className="col-12 bg-success text-white">
        <h4>12</h4>
    </div>
</div>

		</div>
	);
}